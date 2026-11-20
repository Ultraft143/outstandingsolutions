import { Helmet } from "react-helmet-async";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  /** Site path of the page, e.g. "/" or "/politica-privacidade/". */
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const OG_IMAGE = absoluteUrl("/og-image.jpg");

export function Seo({ title, description, path, noindex, jsonLd }: SeoProps) {
  const url = absoluteUrl(path);

  return (
    <Helmet>
      <html lang="pt-PT" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Escritório da Outstanding Solutions em Torres Vedras" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
