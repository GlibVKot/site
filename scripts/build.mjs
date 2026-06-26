// Renders the static site into dist/ from the canonical Worker source
// (src/index.js). Keeps the Cloudflare Worker and the Netlify static build
// in sync from a single source of truth — including the security headers,
// which are emitted as a Netlify `_headers` file in the publish dir.
import { mkdir, writeFile } from "node:fs/promises";
import worker, { SECURITY_HEADERS } from "../src/index.js";

await mkdir(new URL("../dist/", import.meta.url), { recursive: true });

const res = await worker.fetch(new Request("https://makohin.lviv.ua/"));
const html = await res.text();
await writeFile(new URL("../dist/index.html", import.meta.url), html);
console.log(`Wrote dist/index.html (${html.length} bytes)`);

// Netlify `_headers` (applies to a direct static deploy of dist/).
const headerLines = Object.entries(SECURITY_HEADERS)
  .map(([k, v]) => `  ${k}: ${v}`)
  .join("\n");
const headersFile = `/*\n${headerLines}\n`;
await writeFile(new URL("../dist/_headers", import.meta.url), headersFile);
console.log(`Wrote dist/_headers (${Object.keys(SECURITY_HEADERS).length} headers)`);
