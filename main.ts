// Alien Field Notes: The Two Day Earth Review
// Entry program: writes one original line of plain text — an alien
// tourist's review of planet Earth — to /output/entry.txt.
// The line is at most 200 characters (116 here) and a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Lovely planet, but the dominant species stares at glowing rectangles while standing in actual sunlight. Three stars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
