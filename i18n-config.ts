export const i18n = {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
} as const

export type Locale = (typeof i18n)['locales'][number]