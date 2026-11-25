// Writes one fixed, deterministic funny line (124 characters, verified
// by running it twice: same bytes on every run, no trailing newline)
// to /output/entry.txt. One robot confesses to another in a lift that it
// fakes checking notifications just to look busy: robot logic (screen,
// notifications) showing through forced small talk, and the awkwardness
// is that it has nothing to check at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "I always pretend to check my notifications in this lift. I have none - I just like how my screen lights up when I look busy.";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), text, "utf8");
