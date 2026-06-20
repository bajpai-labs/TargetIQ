import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

const root = process.cwd();
const dist = path.join(root, "dist");
const clientDir = path.join(dist, "client");
const serverDir = path.join(dist, "server");
const outDir = path.join(dist, "pages");

async function main() {
  // Fresh output
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  // 1) Copy static assets (client)
  await cp(clientDir, outDir, { recursive: true });

  // 2) Merge server assets required by the worker entrypoint
  await mkdir(path.join(outDir, "assets"), { recursive: true });
  await cp(path.join(serverDir, "assets"), path.join(outDir, "assets"), {
    recursive: true,
    force: true,
  });

  // 3) Put the Cloudflare Pages worker at the output root
  const workerEntry = existsSync(path.join(serverDir, "index.js"))
    ? path.join(serverDir, "index.js")
    : path.join(serverDir, "server.js");

  await cp(workerEntry, path.join(outDir, "_worker.js"), {
    force: true,
  });

  // Some of the generated chunks import "../server.js" from within /assets.
  // Provide it at the output root so module resolution works in Pages.
  if (existsSync(path.join(serverDir, "server.js"))) {
    await cp(path.join(serverDir, "server.js"), path.join(outDir, "server.js"), { force: true });
  }

  // Remove wrangler.json from the Pages output only. Cloudflare Pages can
  // mis-detect TanStack's emitted config in the upload bundle.
  if (existsSync(path.join(outDir, "wrangler.json"))) {
    await rm(path.join(outDir, "wrangler.json"), { force: true });
  }

  const workerPath = path.join(outDir, "_worker.js");
  if (!existsSync(workerPath)) {
    console.error(
      "Missing dist/pages/_worker.js — Cloudflare Pages cannot SSR direct URLs.",
    );
    process.exit(1);
  }

  console.log("Pages deploy bundle ready: dist/pages/_worker.js");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
