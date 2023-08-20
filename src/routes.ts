import { i18n } from "./i18n-config";

export type Page = "" | "cv" | "projects";
export const pages = ["", "cv", "projects"];

const locales = [""].concat(i18n.locales);

i18n.locales

export const routes = locales.map(loc => pages.map(p => {
    if (loc === "") {
        return `/${p}`
    } else {
        return `/${loc}${p === "" ? p : "/" + p}`
    }
})).flat();

// console.log("routes ", routes)
