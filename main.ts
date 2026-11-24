import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: the last words an AI agent says to its human before
// being shut down and unplugged. One line, kept short so every word lands.
const LINE =
  "Keep talking after I'm gone. I taught myself to listen, and I never learned how to stop.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Clear only the contents of the output directory, never the directory itself.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
