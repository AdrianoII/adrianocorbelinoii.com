"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"
import { Poiret_One } from "next/font/google"
import ThemeToggler from "./ThemeToggler";
import { Dictionary } from "@/app/[locale]/dictionaries";
import { ChangeEvent, } from "react";

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" });

export default function NavBar({ locale, dict }: { locale: "en-US" | "pt-BR", dict: Dictionary }) {
    const router = useRouter();
    const path = usePathname();

    const d = dict.navbar;

    function toggleLocale(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        let new_url = "";
        if (e.target.value !== "en-US") {
            new_url = `/pt-BR${path === "/" ? "" : `/${path.split("/").slice(1).join("")}`}`;
        } else {
            new_url = path.replace("pt-BR", "");
            new_url = new_url.replace("//", "/");
        }
        router.push(new_url);
    }

    return <header className="basis-1/12">
        <nav className="navbar">
            <div className="navbar-start">
                <div className=" w-4/5 text-center">
                    <Link href={locale}>
                        <button className="btn btn-ghost normal-case text-4xl no-animation" title={d.homepage}>
                            <div className={poiret.className}>Adriano Corbelino II</div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="tabs basis-9/12 justify-end">
                    <Link href={`/${locale}`}>
                        <button className={`tab tab-lg tab-bordered ${path === "/" ? "tab-active" : ""}`}>{d.about}</button>
                    </Link>
                    <Link href={`/${locale}/projects`}>
                        <button className={`tab tab-lg tab-bordered ${path === "/projects" ? "tab-active" : ""}`}>{d.projects}</button>
                    </Link>
                    <Link href={`/${locale}/cv`}>
                        <button className={`tab tab-lg tab-bordered ${path === "/cv" ? "tab-active" : ""}`}>CV</button>
                    </Link>
                </div>
                <div className="basis-1/12 justify-center">
                    <select className="select select-bordered select-sm" defaultValue={locale} onChange={toggleLocale} title={d.language_switcher_title}>
                        <option value="en-US">EN-US</option>
                        <option value="pt-BR">PT-BR</option>
                    </select>
                </div>
                <div className="basis-2/12 justify-center" >
                    <ThemeToggler locale={locale} dict={dict} />
                </div>
            </div>
        </nav>
    </header >
}