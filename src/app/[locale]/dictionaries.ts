import "server-only"

// TODO: Centralize locales

export type Dictionary = Record<string, Record<string, string>>;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    "en-US": () => import("../../../dictionaries/en-US.json").then((module) => module.default),
    "pt-BR": () => import('../../../dictionaries/pt-BR.json').then((module) => module.default),
}
export const getDictionary = async (locale: "en-US" | "pt-BR") => {
    return await dictionaries[locale]();
} 