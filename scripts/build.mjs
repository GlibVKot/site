// Renders the static site into dist/ from the canonical Worker source
// (src/index.js). Keeps the Cloudflare Worker and the Netlify static build
// in sync from a single source of truth.
import { mkdir, writeFile } from "node:fs/promises";
import worker from "../src/index.js";

await mkdir(new URL("../dist/", import.meta.url), { recursive: true });
const res = await worker.fetch(new Request("https://makohin.lviv.ua/"));
const html = await res.text();
await writeFile(new URL("../dist/index.html", import.meta.url), html);
console.log(`Wrote dist/index.html (${html.length} bytes)`);
