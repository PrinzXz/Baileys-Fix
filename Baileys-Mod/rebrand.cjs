const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.resolve(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (
        !file.includes("node_modules") &&
        !file.includes(".git") &&
        !file.includes(".gemini") &&
        !file.includes("antigravity")
      ) {
        results = results.concat(walk(fullPath));
        results.push(fullPath); // Also check dirs for renaming
      }
    } else {
      if (!file.includes("package-lock.json") && !file.includes(".log")) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const filesAndDirs = walk(process.cwd());
let modifiedFiles = 0;
let renamedItems = 0;

// Replace content in files
filesAndDirs.forEach((f) => {
  try {
    const stat = fs.statSync(f);
    if (stat.isFile()) {
      let content = fs.readFileSync(f, "utf8");
      let newContent = content
        .replace(/Eugen/g, "Eugen")
        .replace(/Eugen/g, "Eugen")
        .replace(/eugen/g, "eugen")
        .replace(/Eugen/g, "Eugen")
        .replace(/eugen/g, "eugen")
        .replace(/Eugen/g, "Eugen")
        .replace(/eugen/g, "eugen")
        .replace(/Eugen/g, "Eugen")
        .replace(/eugen/g, "eugen")
        .replace(/EUGEN/g, "EUGEN");

      if (content !== newContent) {
        fs.writeFileSync(f, newContent, "utf8");
        modifiedFiles++;
        console.log(`Updated content: ${f}`);
      }
    }
  } catch (e) {
    // Skip binaries or unreadable files
  }
});

// Rename files and directories (sort by length descending to rename deepest first)
const toRename = filesAndDirs
  .filter((f) => {
    const basename = path.basename(f);
    return basename.toLowerCase().includes("eugen");
  })
  .sort((a, b) => b.length - a.length);

toRename.forEach((f) => {
  try {
    const dir = path.dirname(f);
    const base = path.basename(f);
    let newBase = base
      .replace(/Eugen/g, "Eugen")
      .replace(/eugen/g, "eugen")
      .replace(/Eugen/g, "Eugen")
      .replace(/eugen/g, "eugen")
      .replace(/Eugen/g, "Eugen")
      .replace(/eugen/g, "eugen");

    if (base !== newBase) {
      const newPath = path.join(dir, newBase);
      fs.renameSync(f, newPath);
      renamedItems++;
      console.log(`Renamed: ${f} -> ${newPath}`);
    }
  } catch (e) {
    console.error(`Failed to rename ${f}: ${e.message}`);
  }
});

console.log(
  `\nDone! Modified ${modifiedFiles} files, renamed ${renamedItems} items.`,
);
