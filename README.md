# RF Hunter — makohin.lviv.ua

A single Cloudflare Worker that serves the **RF Hunter** product one-pager
(ported from the source Google Doc). The page is a self-contained, responsive
HTML document in Ukrainian; the drone photo is inlined as a data URI so the
Worker has **no external asset dependencies**.

- Worker name: `noisy-sun-f5d1`
- Custom domain: `makohin.lviv.ua` (already bound in the Cloudflare dashboard)

## Project layout

```
src/
  index.js   # the Worker: builds the HTML page and serves it
  image.js   # optimized drone photo (1000×750 JPEG) as a data URI
wrangler.toml
package.json
```

## Local preview

```bash
npm install
npm run dev          # wrangler dev → http://localhost:8787
```

## Deploy

Requires Cloudflare auth (one of):

- Interactive: `npx wrangler login`, **or**
- CI/non-interactive: export `CLOUDFLARE_API_TOKEN` (a token with the
  *Edit Cloudflare Workers* template) and, if needed, `CLOUDFLARE_ACCOUNT_ID`.

Then:

```bash
npm run deploy       # wrangler deploy
```

`wrangler deploy` updates the existing `noisy-sun-f5d1` Worker in place. The
custom-domain binding for `makohin.lviv.ua` is configured in the dashboard and
is **not** managed by this repo (no `routes` are declared in `wrangler.toml`),
so deploying only swaps the script and leaves routing untouched.

## Editing content

All copy lives in `src/index.js` (the `html` template). The contact links and
the web-app link are defined in the `LINKS` constant at the top of that file:

- Web app (heatmap): https://flyinghunter-heatmap.netlify.app
- Signal / WhatsApp / phone for contact

To replace the photo, regenerate `src/image.js` with a new
`data:image/jpeg;base64,…` string.
