/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'pt-BR'],
        defaultLocale: 'en-US',
        localeDetection: true,
    }
}

module.exports = nextConfig
