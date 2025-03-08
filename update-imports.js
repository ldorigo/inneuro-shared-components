const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Patterns to replace
const replacements = [
  {
    from: /from\s+["']@\/components\/ui\/([^"']+)["']/g,
    to: 'from "../$1"',
  },
  {
    from: /from\s+["']@\/lib\/utils["']/g,
    to: 'from "../../../lib/utils"',
  },
];

// Special replacements for tooltip components
const tooltipReplacements = [
  {
    from: /from\s+["']\.\.\/\.\.\/lib\/utils["']/g,
    to: 'from "../../../lib/utils"',
  },
];

// File extensions to process
const extensions = [".ts", ".tsx", ".js", ".jsx"];

// Directories to exclude
const excludeDirs = ["node_modules", ".git", "dist"];

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, "utf8");
    let newContent = content;

    let hasChanges = false;

    // Apply special replacements for tooltip components
    if (filePath.includes("tooltip")) {
      for (const { from, to } of tooltipReplacements) {
        if (from.test(newContent)) {
          newContent = newContent.replace(from, to);
          hasChanges = true;
        }
      }
    } else {
      // Apply regular replacements for other components
      for (const { from, to } of replacements) {
        if (from.test(newContent)) {
          newContent = newContent.replace(from, to);
          hasChanges = true;
        }
      }
    }

    if (hasChanges) {
      console.log(`Updating imports in ${filePath}`);
      await writeFile(filePath, newContent, "utf8");
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function walkDir(dir) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    if (excludeDirs.includes(entry)) continue;

    const entryPath = path.join(dir, entry);
    const entryStat = await stat(entryPath);

    if (entryStat.isDirectory()) {
      await walkDir(entryPath);
    } else if (
      entryStat.isFile() &&
      extensions.includes(path.extname(entryPath))
    ) {
      await processFile(entryPath);
    }
  }
}

// Start processing from components directory
walkDir("./components")
  .then(() => console.log("Import updates completed"))
  .catch((err) => console.error("Error updating imports:", err));
