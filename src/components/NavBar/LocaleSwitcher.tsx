"use client"

import { Dictionary } from "@/app/[locale]/dictionaries";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { RouteBuilder } from "@/RouteBuilder"
import { Locale } from "@/i18n-config";

export default function LanguageSwitcher({ locale, dict, route }: {
    locale: Locale, dict: Dictionary, route: RouteBuilder
}) {
    const router = useRouter();
    const d = dict.locale_switcher;

    function toggleLocale(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();

        if (route.locale === "en-US" || route.locale === "") {
            route.locale = "pt-BR";
        } else {
            route.locale = "en-US";
        }
        // console.log("switch url", route.toString(true));
        document.cookie = `user_locale=${route.locale}`;
        router.push(route.toString(true));
    }

    return <select name="LanguageSelect" className="select select-bordered select-sm" defaultValue={locale}
        onChange={toggleLocale} title={d.title}>
        <option value="en-US">EN-US</option>
        <option value="pt-BR">PT-BR</option>
    </select>;
}