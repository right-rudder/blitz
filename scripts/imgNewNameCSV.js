#!/usr/bin/env node

// This script searches through a project for images in the public and src/assets folders and prepares a CSV file with the generated new names with keywords for better SEO.
// The chosen pattern is "original-file-name-company-name-localization-keyword-general-keyword.ext". Ex: crew-greg-updated-headshot-simplifly-arizona-flying-lessons.jpg
// OBS: The script also removes keywords, from the list of keywords, from the original file name.
// Required npm package: csv-parse
//
// To run:
// On the VS Code terminal at the root of the project run "node ./scripts/imgNewNameCSV.js"
// You can also add the command above in the package.json similar to the astro commands:
// "scripts": {
//    "dev": "astro dev",
//    "img:csv": "node ./scripts/imgNewNameCSV.js",
// },
// And then run the command in the terminal as "npm run img:csv"

// ########################################################################################################################################
// ### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###
// ########################################################################################################################################
//
//   The script doesn't account for positional based relative image paths, so those should be updated manually. Ex: "../assets/image.jpg"
//   In the future it is preferred to always use paths relative to the root of the project. Ex: "/src/assets/image.jpg"
//
//   The expected project directory configuration is as follows.
//   If this file is not placed in the expected directory or the directory configuration is different from this, the script won't work:
//
//   root
//   [...]
//   /public
//   /scripts
//     thisFile.js
//   /src
//     /assets
//   [...]
//
// ########################################################################################################################################
// ### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###
// ########################################################################################################################################

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const CSV_COLUMNS = {
  ORIGINAL_IMG_FULL_PATH: 0,
  NEW_IMG_FULL_PATH: 1,
  ORIGINAL_IMG_RELATIVE_PATH: 2,
  NEW_IMG_RELATIVE_PATH: 3,
  ERROR: 4,
};

const CSV_ERRORS = {
  OK: "OK",
  ORIGINAL_DOES_NOT_EXIST: "ORIGINAL FILE DOES NOT EXIST",
  RENAMED_ALREADY_EXISTS: "RENAMED FILE ALREADY EXISTS",
  USER_SKIPPED: "THE FILE RENAMING WAS SKIPPED BY THE USER",
};

const IMG_EXT = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"];

/* TODO : Use more relevant keywords */

const keywords = {
  company: "blitz-aviation",
  location: [
    "ogden",
    "utah",
    "salt-city-lake",
    "northern-utah",
    "weber-county",
    "davis-county",
    "wasatch-front",
  ],
  generic: [
    "flight-school",
    "flight-training",
    "pilot-training",
    "flying-lessons",
    "become-a-pilot",
    "discovery-flight",
    "aircraft-rental",
  ],
  programs: [
    "private-pilot",
    "instrument-rating",
    "commercial-pilot",
    "multi-engine-rating",
    "certified-flight-instructor",
    "certified-flight-instructor-instrument",
    "accelerated-flight-training",
    "zero-to-hero-pilot-program",
  ],
};

const fullKeywordList = [
  keywords.company,
  ...keywords.location,
  ...keywords.generic,
  ...keywords.programs,
];

const generalKeywords = [...keywords.generic, ...keywords.programs];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const importFilePath = process.argv[1].includes("\\")
  ? import.meta.url.replace("file:///", "").replaceAll("/", "\\")
  : import.meta.url.replace("file://", "");
const isCommandLineExecution = importFilePath === process.argv[1];

/* TODO : Add weight to more important keywords? */

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function scanDirectory(dir, extensions) {
  const files = [];
  const extArray = Array.isArray(extensions) ? extensions : [extensions];

  async function* walk(dir) {
    const dirEntries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const dirEntry of dirEntries) {
      const res = path.resolve(dir, dirEntry.name);
      if (dirEntry.isDirectory()) {
        yield* walk(res);
      } else if (extArray.some((ext) => dirEntry.name.endsWith(ext))) {
        yield res;
      }
    }
  }

  for await (const file of walk(dir)) {
    files.push(file);
  }

  return files;
}

/* TODO : Add some sort of protection or warning to duplicate names?
OBS: The imgRenaming.js script already checks if a file with the new name exists before running the renaming operation, and skips it if that is the case. 
Maybe a proper treatment could be done in that step, like generating a new csv file for the images that weren't renamed due to any given circumstance. */

function generateNewImagePath(filePath) {
  const parsedPath = path.parse(filePath);

  let newName = parsedPath.name.toLowerCase();

  newName = newName.replaceAll(" ", "-");
  newName = newName.replaceAll(",", "-");

  // Remove keywords from the name
  for (const keyword of fullKeywordList) {
    if (newName.includes(keyword + "-")) {
      newName = newName.replaceAll(keyword + "-", "");
    }

    if (newName.includes("-" + keyword)) {
      newName = newName.replaceAll(keyword + "-", "");
    }
  }

  return path.join(
    parsedPath.dir,
    `${newName}-${keywords.company}-${randomFromArray(keywords.location)}-${randomFromArray(generalKeywords)}` +
      parsedPath.ext.toLowerCase(),
  );
}

async function listImagesFromDir(dir, relativeDirForm, results) {
  console.log(`### Generating image path list for "${dir}".`);
  const images = await scanDirectory(dir, IMG_EXT);

  console.log(`### Populating resulting image paths from "${dir}".`);
  for (const imagePath of images) {
    const newPath = generateNewImagePath(imagePath);

    results.push([
      imagePath,
      newPath,
      "/" + path.relative(relativeDirForm, imagePath).replaceAll("\\", "/"),
      "/" + path.relative(relativeDirForm, newPath).replaceAll("\\", "/"),
      CSV_ERRORS.OK,
    ]);
  }
}

async function listImages() {
  const results = [];
  const assetsDir = path.join(__dirname, "../src/assets");
  const publicDir = path.join(__dirname, "../public");
  const projectDir = path.join(__dirname, "../");

  await listImagesFromDir(assetsDir, projectDir, results);
  await listImagesFromDir(publicDir, publicDir, results);

  return results;
}

async function generateCSV() {
  const results = await listImages();

  console.log("### Outputting CSV file.");

  // Convert the array to a CSV string
  const csvString = results.map((row) => row.join(",")).join("\n");

  try {
    await fs.promises.writeFile(
      path.join(__dirname, "images-to-rename.csv"),
      csvString,
      "utf-8",
    );

    console.log("### CSV file saved successfully!");
  } catch (err) {
    console.error("--- Error writing CSV file:", err);
  }
}

async function runCommand() {
  if (!isCommandLineExecution) return;

  await generateCSV();
}

await runCommand();

export { generateCSV, scanDirectory, CSV_COLUMNS, CSV_ERRORS };
