/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit source maps for the production client bundles (the code is public on
  // GitHub anyway) so debugging + Lighthouse's source-map check are satisfied.
  productionBrowserSourceMaps: true,
  async redirects() {
    // i18n was dropped (English only). Redirect previously-indexed
    // locale-prefixed URLs to their canonical equivalents.
    return [
      { source: "/:locale(en-US|pt-BR)", destination: "/", permanent: true },
      {
        source: "/:locale(en-US|pt-BR)/:path*",
        destination: "/:path*",
        permanent: true,
      },
      // The résumé PDF was renamed; keep the old URL working for existing links.
      { source: "/Resume_EN.pdf", destination: "/cv_adrianoii.pdf", permanent: true },
    ]
  },
}

export default nextConfig
