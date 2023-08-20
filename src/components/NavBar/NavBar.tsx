"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Poiret_One } from "next/font/google"
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "./LocaleSwitcher";
import { Dictionary } from "@/app/[locale]/dictionaries";
import { useState } from "react";
import { RouteBuilder } from "@/RouteBuilder"

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" });

export default function NavBar({ locale, dict }: { locale: "en-US" | "pt-BR", dict: Dictionary }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const path = usePathname();

    const route = new RouteBuilder(path);
    const d = dict.navbar;

    const closeDrawer = () => {
        (document.querySelector("#nav_drawer") as HTMLInputElement).checked = false;
    }

    return <header className="lg:basis-1/12">
        <div className="drawer">
            <input id="nav_drawer" type="checkbox" className="drawer-toggle" onChange={e => setIsDrawerOpen(e.target.checked)} hidden />
            <div className="drawer-content flex flex-col">
                <nav className="w-full navbar justify-center">
                    <div className="absolute left-0 lg:hidden">
                        <label htmlFor="nav_drawer"
                            className="btn btn-square btn-ghost" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="lg:navbar-start">
                        <div className="lg:w-4/5 lg:text-center">
                            <Link href={RouteBuilder.fromLocalePage(locale, "").toString(true)}>
                                <button className="btn btn-ghost normal-case text-2xl lg:text-4xl no-animation" title={d.homepage}>
                                    <div className={poiret.className}>Adriano Corbelino II</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:navbar-end lg:flex lg:gap-4">
                        <div className="tabs basis-9/12 justify-end">
                            <Link href={RouteBuilder.fromLocalePage(locale, "").toString(true)}>
                                <button className={`tab tab-lg tab-bordered ${route.page === "" ? "tab-active" : ""}`}>{d.about}</button>
                            </Link>
                            <Link href={RouteBuilder.fromLocalePage(locale, "projects").toString(true)}>
                                <button className={`tab tab-lg tab-bordered ${route.page === "projects" ? "tab-active" : ""}`}>{d.projects}</button>
                            </Link>
                            <Link href={RouteBuilder.fromLocalePage(locale, "cv").toString(true)}>
                                <button className={`tab tab-lg tab-bordered ${route.page === "cv" ? "tab-active" : ""}`}>CV</button>
                            </Link>
                        </div>
                        <div className="basis-1/12 justify-center">
                            <LanguageSwitcher locale={locale} dict={dict} route={route} />
                        </div>
                        <div className="basis-2/12 justify-center">
                            <ThemeToggler locale={locale} dict={dict} />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="drawer-side">
                <label htmlFor="nav_drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-secondary">
                    <li className={`btn btn-ghost ${route.page === "" ? "btn-active" : ""}`}>
                        <Link href={RouteBuilder.fromLocalePage(locale, "").toString(true)} className="w-full place-content-center" onClick={closeDrawer}>
                            {d.about}
                        </Link>
                    </li>
                    <li className={`btn btn-ghost ${route.page === "projects" ? "btn-active" : ""}`}>
                        <Link href={RouteBuilder.fromLocalePage(locale, "projects").toString(true)} className="w-full place-content-center" onClick={closeDrawer}>
                            {d.projects}
                        </Link>
                    </li>
                    <li className={`btn btn-ghost ${route.page === "cv" ? "btn-active" : ""} `} >
                        <Link href={RouteBuilder.fromLocalePage(locale, "cv").toString(true)} className="w-full place-content-center" onClick={closeDrawer}>
                            CV
                        </Link>
                    </li>
                    <li>
                        <div className="flex w-full">
                            <div className="grid flex-grow place-items-center">
                                <LanguageSwitcher locale={locale} dict={dict} route={route} />
                            </div>
                            <div className="divider divider-horizontal" />
                            <div className="grid flex-grow place-items-center">
                                <div className={!isDrawerOpen ? "hidden" : "grid"}>
                                    <ThemeToggler locale={locale} dict={dict} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    </header >
}