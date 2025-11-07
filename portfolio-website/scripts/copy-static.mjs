import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcAssets = path.join(root, "assets");
const publicDir = path.join(root, "public");
const publicAssets = path.join(publicDir, "assets");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyRecursive(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  await ensureDir(dest);
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  await ensureDir(publicDir);
  // Assets are already in public/assets - no need to copy
  console.log("Assets are already in public/assets");

  // Google verification file is already in public/ - no need to copy
  console.log("Google verification file is already in public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
