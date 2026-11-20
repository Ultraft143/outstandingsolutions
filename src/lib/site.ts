/**
 * Public, absolute URL of the site (no trailing slash). Used for canonical
 * links, Open Graph tags, the sitemap and structured data.
 *
 * Override at build time with VITE_SITE_URL when the site moves to its own
 * domain, e.g. VITE_SITE_URL=https://outstanding.pt (and set Vite's `base`
 * to "/" in vite.config.ts at the same time).
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://ultraft143.github.io/outstandingsolutions"
).replace(/\/+$/, "");

export const SITE_NAME = "Outstanding Solutions";

/** Builds an absolute URL for a site path such as "/" or "/politica-privacidade/". */
export const absoluteUrl = (path: string) =>
  SITE_URL + (path.startsWith("/") ? path : `/${path}`);

export const BUSINESS = {
  legalName: "Outstanding Solutions",
  email: "geral@outstanding.pt",
  telephone: "+351962344785",
  streetAddress: "Rua Dr. Gomes Leal 3A",
  postalCode: "2560-331",
  locality: "Torres Vedras",
  country: "PT",
};

/** Routes that are pre-rendered to static HTML at build time (see scripts/prerender.mjs). */
export const PRERENDER_ROUTES = ["/", "/politica-privacidade/", "/termos-condicoes/"];
