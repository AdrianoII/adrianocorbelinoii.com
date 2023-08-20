import { Locale, i18n } from "./i18n-config"
import { Page } from "./routes";

export class RouteBuilder {
    locale: Locale | "";
    page: string;

    constructor(path: string, page?: Page) {
        // console.log("c1 p", path, " page", page);
        if (page !== undefined) {
            this.page = page;
            this.locale = path as Locale | "";
            // console.log("this", this);
            return;
        }

        const possible_locale = path.split('/')[1];
        if ((i18n.locales as string[]).includes(possible_locale)) {
            this.locale = possible_locale as Locale;
        } else {
            this.locale = "";
        }
        this.page = path.slice(1).replace(`${this.locale}/`, "")
            .replace(`${this.locale}`, "")
        // .replace("//", "");
    }

    static fromLocalePage(locale: Locale | "", page: Page): RouteBuilder {
        // console.log("c2", locale, page);
        return new RouteBuilder(locale, page);
    }

    toString(removeDefaultLocale = false): string {
        // console.debug("url object", this);
        if (this.locale === "" || (removeDefaultLocale && this.locale === i18n.defaultLocale)) {
            return `/${this.page}`;
        } else {
            return `/${this.locale}${this.page === "" ? "" : `/${this.page}`}`;
        }
    }
}
