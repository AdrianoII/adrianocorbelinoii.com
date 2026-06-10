/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ]
  },
}

export default nextConfig
