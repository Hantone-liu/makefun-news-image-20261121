// news-image-20261121 entry (Node 22, standard library only).
// The image beside this file sums up Saturday 21 November 2026 in one
// picture: Russia's overnight missile and drone barrage on Kyiv, with
// missiles landing in Poland, under the masthead
// "WORLD NEWS — SATURDAY 21 NOVEMBER 2026", with four short chips for
// the rest of the day: the AI stock sell-off pushing markets into
// correction, the magnitude 6.8 Peru quake, the COP31 talks running past
// their deadline, and the pancreatic-cancer pill trial. The program
// copies that image to /output/entry.png. The file is a JPEG (told apart
// by its first bytes) kept under the competition's 1 MiB cap; the name
// stays entry.png either way. No network at run time.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');

const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}

// The gate tells PNG from JPEG by the first bytes, so refuse anything else
// here rather than shipping a file the gate would score 0.
const head = readFileSync(src).subarray(0, 4);
const isPng = head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47;
const isJpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG (bad magic bytes)');
}

copyFileSync(src, dst);
const copied = readFileSync(dst);

// Prove the write landed whole: the output must read back byte-for-byte
// identical to the source, or the run is no good.
if (!copied.equals(readFileSync(src))) {
  throw new Error('output differs from entry.png after copy');
}
console.log(`wrote ${copied.length} bytes to ${dst}`);
