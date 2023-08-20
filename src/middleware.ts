// import { routes } from "./routes";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { RouteBuilder } from "./RouteBuilder"
import { i18n, Locale } from "./i18n-config"

function resolveLocale(request: NextRequest): string {
    const user_locale = request.cookies.get("user_locale");
    // console.log("cookie", user_locale);
    if (user_locale) {
        return user_locale.value;
    }

    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales
    );
    // console.log("user languages", languages);
    const locale = matchLocale(languages, locales, i18n.defaultLocale);

    return locale || i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
    // console.log("routes", routes);
    const pathname = request.nextUrl.pathname;
    // console.debug("middleware", pathname);
    let route = new RouteBuilder(pathname);
    // console.debug("url", route.toString());

    // set up to hide default locale in url
    if (route.locale === i18n.defaultLocale) {
        route.locale = "";
        // console.debug("removed default locale", route.toString());
        let res = NextResponse.redirect(new URL(route.toString(), request.url));
        res.cookies.set("user_locale", "en-US");
        return res;
    }

    // no locale on url
    if (route.locale === "") {
        route.locale = resolveLocale(request) as Locale;
        // console.debug("no locale on url (", route.locale, ")");

        // hide default url
        if (route.locale === i18n.defaultLocale) {
            return NextResponse.rewrite(new URL(route.toString(), request.url));
        }

        return NextResponse.redirect(new URL(route.toString(), request.url));
    }

}

export const config = {
    matcher: ['/', '/cv', '/projects', '/en-US', '/en-US/cv',
        '/en-US/projects', '/pt-BR', '/pt-BR/cv', '/pt-BR/projects'
    ],
}