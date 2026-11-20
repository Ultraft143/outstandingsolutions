import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

export { SITE_URL, PRERENDER_ROUTES } from "./lib/site";

/**
 * Renders a route to static HTML for build-time pre-rendering.
 * `path` is relative to the site base, e.g. "/" or "/politica-privacidade/".
 */
export function render(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={base + path} basename={import.meta.env.BASE_URL}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script]
        .map((part) => part.toString())
        .join("\n    ")
    : "";
  const htmlAttributes = helmet ? helmet.htmlAttributes.toString() : "";

  return { html, head, htmlAttributes };
}
