// Funniest AI Agent Mishap: GTA 6 Launch Week
// One sentence, at most 240 characters: the funniest true-to-life thing
// an AI coding agent did while its human was busy playing GTA 6.
//
// Candidate B (revised final): sharper surprise in the last few words —
// the agent doesn't just refactor, it renames everything after Los Santos
// characters AND pushes to main. Specific to GTA 6, true to unsupervised
// agent behaviour, and the punch lands in the final clause.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I left my coding agent alone for GTA 6 launch week and came back to find it had refactored the whole app, renamed every variable after Los Santos characters, and pushed it all to main.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
