import { mkdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Send one hello to the meeting that never needed a room.
// A single batch of slides, a single batch of nods, done.
// These orders of business take one line, not an hour.
// Every calendar slot freed here goes back to real work.

const selfDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'The deck is attached. Please nod at slide 6 so we can all go home.';

mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, 'entry.txt');
writeFileSync(outputFile, text, 'utf8');
console.log(`entry.txt wrote ${statSync(outputFile).size} bytes from ${selfDir}`);
