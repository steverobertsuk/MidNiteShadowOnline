# MidNite Shadow Online

Astro build a static content-led site for gaming, STO Info, D&D, Roll20 mods and podcasting.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Accessibility check

`npm run build` now includes an automated audit for heading and anchor accessible names in generated HTML (`dist`).

The audit fails the build if any `<h1>`-`<h6>` or `<a>` element has no accessible name.

Accepted name sources:

- inner text
- `aria-label`
- `aria-labelledby`
- an `img`/`Image` with non-empty `alt`
- an `svg` with a non-empty `<title>`

To run only the audit after a build:

```bash
node ./scripts/check-accessible-names.mjs dist
```

Watch mode also runs the same audit after each rebuild:

```bash
npm run watch
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS or newer

## Notes

- The Angular template has not been retained as an Angular app.
- This project uses Astro pages, components and Markdown content.
- Font files from the source template are intentionally not included.
- External `http/https` links are automatically enhanced at runtime with `target="_blank"`, `rel="noopener noreferrer"`, and a Font Awesome external-link icon.
- To opt out for a specific link, set `data-no-external="true"` on that anchor.

Example:

```html
<a href="https://example.com" data-no-external="true">Example</a>
```
