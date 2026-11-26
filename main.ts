// Entry generator for the robot band name competition.
// The program validates the single line, then saves it as entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The Charging Cables: their #1 hit 'Low Battery Blues' died mid-chorus, 'Please Update to Continue' has 47 verses, and the drummer is still buffering.";

function checkLine(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Line must be 1-200 characters long, but it is ${chars}.`);
  }
  const lines = text.split(/\r\n|\r|\n/);
  if (lines.length !== 1) {
    throw new Error("Line must fit on one line.");
  }
}

checkLine(line);

// The band is a charging cable; the two hit songs escalate the
// low-battery joke, and the drummer still buffering is the short kicker.
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetFile = join(targetDir, "entry.txt");
mkdirSync(targetDir, { recursive: true });
writeFileSync(targetFile, line, { encoding: "utf8" });
