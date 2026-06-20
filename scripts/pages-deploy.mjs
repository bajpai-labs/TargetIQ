#!/usr/bin/env node
/**
 * Deploy the current site to Cloudflare Pages:
 * 1. Read project name and compat settings from wrangler.toml
 * 2. Create the Pages project if it does not exist
 * 3. Upload dist/pages (with _worker.js) with retries
 *
 * Run from a site directory (HelixForge, GeneForge, …) after `npm run build:pages`,
 * or use `npm run deploy:pages` / `npm run upload:pages` from the site or biotech root.
 *
 * Auth: `wrangler login` or set CLOUDFLARE_API_TOKEN (+ CLOUDFLARE_ACCOUNT_ID if needed).
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const root = process.cwd();
const maxAttempts = 3;
const retryDelayMs = 15_000;
const productionBranch = process.env.CF_PAGES_PRODUCTION_BRANCH ?? "main";

function parseWranglerToml(filePath) {
  const raw = readFileSync(filePath, "utf8");
  const get = (key) => raw.match(new RegExp(`^${key}\\s*=\\s*"([^"]+)"`, "m"))?.[1];
  const flagsMatch = raw.match(/^compatibility_flags\s*=\s*\[([\s\S]*?)\]/m);
  const compatibilityFlags = flagsMatch
    ? [...flagsMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
    : [];

  return {
    projectName: get("name"),
    compatibilityDate: get("compatibility_date"),
    compatibilityFlags,
    outputDir: get("pages_build_output_dir") ?? "dist/pages",
  };
}

function parseSiteOrigin() {
  const sitePath = path.join(root, "src/lib/site.ts");
  if (!existsSync(sitePath)) return undefined;
  const raw = readFileSync(sitePath, "utf8");
  return raw.match(/SITE_ORIGIN\s*=\s*"([^"]+)"/)?.[1];
}

function wranglerBin() {
  const local = path.join(root, "node_modules", "wrangler", "bin", "wrangler.js");
  if (existsSync(local)) return local;
  throw new Error(
    `wrangler not found in ${root}/node_modules. Run npm install in this site directory first.`,
  );
}

function runWrangler(args, { inherit = true } = {}) {
  return execFileSync(process.execPath, [wranglerBin(), ...args], {
    stdio: inherit ? "inherit" : "pipe",
    cwd: root,
    encoding: inherit ? undefined : "utf8",
  });
}

function listProjects() {
  try {
    const out = runWrangler(["pages", "project", "list", "--json"], { inherit: false });
    const parsed = JSON.parse(out);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/not authenticated|authentication|API token|10000/i.test(message)) {
      console.error(
        "\nCloudflare auth required. Run `npx wrangler login` or set CLOUDFLARE_API_TOKEN (see biotech/.env.example).\n",
      );
      process.exit(1);
    }
    console.warn("Could not list Pages projects; will attempt create/deploy anyway.");
    return null;
  }
}

function projectExists(projectName) {
  const projects = listProjects();
  if (projects === null) return false;
  return projects.some((p) => p.name === projectName);
}

function ensureProject({ projectName, compatibilityDate, compatibilityFlags }) {
  if (projectExists(projectName)) {
    console.log(`✓ Cloudflare Pages project "${projectName}" exists`);
    return;
  }

  console.log(`Creating Cloudflare Pages project "${projectName}"…`);

  const args = [
    "pages",
    "project",
    "create",
    projectName,
    "--production-branch",
    productionBranch,
  ];

  if (compatibilityDate) {
    args.push("--compatibility-date", compatibilityDate);
  }
  for (const flag of compatibilityFlags) {
    args.push("--compatibility-flag", flag);
  }

  try {
    runWrangler(args);
    console.log(`✓ Created project "${projectName}"`);
  } catch {
    if (projectExists(projectName)) {
      console.log(`✓ Project "${projectName}" already exists`);
      return;
    }
    console.warn(
      `⚠ Could not create "${projectName}" (may already exist or API error). Continuing with deploy…`,
    );
  }
}

async function deployWithRetry(projectName, outputDir) {
  const deployDir = path.join(root, outputDir);
  const workerPath = path.join(deployDir, "_worker.js");

  if (!existsSync(workerPath)) {
    console.error(`Missing ${outputDir}/_worker.js — run npm run build:pages first.`);
    process.exit(1);
  }

  // Wrangler caches deploy config; clear so Pages always uses dist/pages.
  rmSync(path.join(root, ".wrangler"), { recursive: true, force: true });

  const args = [
    "pages",
    "deploy",
    outputDir,
    "--project-name",
    projectName,
    "--commit-dirty=true",
  ];

  if (process.env.CF_PAGES_BRANCH) {
    args.push("--branch", process.env.CF_PAGES_BRANCH);
  }

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    if (attempt > 1) {
      console.log(
        `\nUpload failed — retrying in ${retryDelayMs / 1000}s (attempt ${attempt}/${maxAttempts})…\n`,
      );
      await sleep(retryDelayMs);
    }

    try {
      console.log(`Uploading ${outputDir} → ${projectName}…`);
      runWrangler(args);
      return;
    } catch {
      if (attempt === maxAttempts) {
        console.error(
          "\nPages deploy failed after multiple attempts. This is often a transient Cloudflare API error.",
        );
        console.error("Retry in a few minutes or check https://www.cloudflarestatus.com/\n");
        process.exit(1);
      }
    }
  }
}

async function main() {
  const wranglerPath = path.join(root, "wrangler.toml");
  if (!existsSync(wranglerPath)) {
    console.error("wrangler.toml not found. Run this script from a site directory (e.g. HelixForge/).");
    process.exit(1);
  }

  const config = parseWranglerToml(wranglerPath);
  if (!config.projectName) {
    console.error("wrangler.toml is missing `name = \"…\"`.");
    process.exit(1);
  }

  const siteOrigin = parseSiteOrigin();
  const hostname = siteOrigin?.replace(/^https:\/\//, "");

  console.log(`\n── Cloudflare Pages deploy ──`);
  console.log(`   Project : ${config.projectName}`);
  if (hostname) console.log(`   Domain  : ${hostname} (attach in dashboard if new)`);
  console.log(`   Bundle  : ${config.outputDir}\n`);

  ensureProject(config);
  await deployWithRetry(config.projectName, config.outputDir);

  console.log("\n✓ Deploy complete");
  console.log(`  Preview: https://${config.projectName}.pages.dev`);
  if (hostname) {
    console.log(`  Custom : https://${hostname}`);
    console.log(
      `\n  If ${hostname} is not live yet, add it under Pages → ${config.projectName} → Custom domains.`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
