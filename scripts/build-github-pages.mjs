#!/usr/bin/env node
/**
 * Build a static bundle for GitHub Pages (project site subpath).
 * Sets GITHUB_PAGES_BASE, copies dist/client → dist/gh-pages, adds 404.html for SPA routing.
 */

import { spawnSync } from "node:child_process";
import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const repoName = process.env.GH_PAGES_REPO ?? path.basename(root);
const base = `/${repoName}/`;

console.log(`Building for GitHub Pages (base: ${base})…`);

const build = spawnSync("npm", ["run", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES_BASE: base },
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const clientDir = path.join(root, "dist/client");
const outDir = path.join(root, "dist/gh-pages");

if (!existsSync(clientDir)) {
  console.error("Missing dist/client — build did not produce client assets.");
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(clientDir, outDir, { recursive: true });

const indexPath = path.join(outDir, "index.html");
if (existsSync(indexPath)) {
  await cp(indexPath, path.join(outDir, "404.html"));
}

console.log(`GitHub Pages bundle ready: dist/gh-pages`);
console.log(`Live URL: https://bajpai-labs.github.io${base}`);
