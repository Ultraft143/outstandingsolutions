// Build-time pre-rendering for GitHub Pages.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle) and:
//   - writes static HTML with real content and per-page <head> tags for every
//     route in PRERENDER_ROUTES (e.g. dist/politica-privacidade/index.html),
//     so crawlers get content and GitHub Pages answers 200 instead of 404;
//   - writes dist/404.html with the pre-rendered "not found" page, which GitHub
//     Pages serves with a real 404 status for unknown URLs;
//   - generates dist/sitemap.xml and dist/robots.txt from SITE_URL.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, SITE_URL, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

function renderPage(route) {
  const { html, head, htmlAttributes } = render(route);
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('index.html must contain an empty <div id="root"></div>');
  }
  return template
    .replace(/<html[^>]*>/, `<html ${htmlAttributes}>`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

function write(relativeFile, contents) {
  const file = path.join(distDir, relativeFile);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
  console.log(`  prerendered ${path.relative(root, file)}`);
}

for (const route of PRERENDER_ROUTES) {
  const file = route === "/" ? "index.html" : path.join(route, "index.html");
  write(file, renderPage(route));
}

// Any path not in the route list renders the catch-all NotFound page.
write("404.html", renderPage("/404/"));

const today = new Date().toISOString().slice(0, 10);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map(
  (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
).join("\n")}
</urlset>
`,
);

write(
  "robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

fs.rmSync(ssrDir, { recursive: true, force: true });
