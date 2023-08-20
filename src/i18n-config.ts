type Locale = "en-US" | "pt-BR";
export type { Locale };

export const i18n: { locales: readonly Locale[], defaultLocale: Locale } = {
    // export const i18n: { locales: readonly string[], defaultLocale: Locale } = {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
} as const
