"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"
import { Poiret_One } from "next/font/google"
import ThemeToggler from "./ThemeToggler";
import { Dictionary } from "@/app/[locale]/dictionaries";
import { ChangeEvent, useState } from "react";

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" });

export default function NavBar({ locale, dict }: { locale: "en-US" | "pt-BR", dict: Dictionary }) {
    const router = useRouter();
    const path = usePathname();
    const bare_path = path === "/pt-BR" ? "/" : path.replace("/pt-BR", "");
    const d = dict.navbar;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    return <header className="lg:basis-1/12">
        <div className="drawer">
            <input id="nav_drawer" type="checkbox" className="drawer-toggle" hidden checked={isDrawerOpen} readOnly />
            <div className="drawer-content flex flex-col">
                <nav className="w-full navbar justify-center">
                    <div className="absolute left-0 lg:hidden">
                        <label htmlFor="nav_drawer" className="btn btn-square btn-ghost" onClick={() => setIsDrawerOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="lg:navbar-start">
                        <div className="lg:w-4/5 lg:text-center">
                            <Link href={locale}>
                                <button className="btn btn-ghost normal-case text-2xl lg:text-4xl no-animation" title={d.homepage}>
                                    <div className={poiret.className}>Adriano Corbelino II</div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:navbar-end lg:flex lg:gap-4">
                        <div className="tabs basis-9/12 justify-end">
                            <Link href={`/${locale}`}>
                                <button className={`tab tab-lg tab-bordered ${bare_path === "/" ? "tab-active" : ""}`}>{d.about}</button>
                            </Link>
                            <Link href={`/${locale}/projects`}>
                                <button className={`tab tab-lg tab-bordered ${bare_path === "/projects" ? "tab-active" : ""}`}>{d.projects}</button>
                            </Link>
                            <Link href={`/${locale}/cv`}>
                                <button className={`tab tab-lg tab-bordered ${bare_path === "/cv" ? "tab-active" : ""}`}>CV</button>
                            </Link>
                        </div>
                        <div className="basis-1/12 justify-center">
                            <select className="select select-bordered select-sm" defaultValue={locale} onChange={toggleLocale} title={d.language_switcher_title}>
                                <option value="en-US">EN-US</option>
                                <option value="pt-BR">PT-BR</option>
                            </select>
                        </div>
                        <div className="basis-2/12 justify-center">
                            <ThemeToggler locale={locale} dict={dict} />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="drawer-side" onClick={() => setIsDrawerOpen(false)}>
                <label htmlFor="nav_drawer" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-secondary">
                    <li className={`btn btn-ghost ${bare_path === "/" ? "btn-active" : ""}`} onClick={() => setIsDrawerOpen(false)}>
                        <Link href={`/${locale}`} className="w-full place-content-center">
                            {d.about}
                        </Link>
                    </li>

                    <div className="divider" />

                    <li className={`btn btn-ghost ${bare_path === "/projects" ? "btn-active" : ""} no-animation`} onClick={() => setIsDrawerOpen(false)}>
                        <Link href={`/${locale}/projects`} className="w-full place-content-center">
                            {d.projects}
                        </Link>
                    </li>

                    <div className="divider" />

                    <li className={`btn btn-ghost ${bare_path === "/cv" ? "btn-active" : ""} no-animation`} onClick={() => setIsDrawerOpen(false)}>
                        <Link href={`/${locale}/cv`} className="w-full place-content-center">
                            CV
                        </Link>
                    </li>
                    <div className="divider" />
                    <li>
                        <div className="flex w-full">
                            <div className="grid flex-grow place-items-center">
                                <select className="select select-bordered select-sm bg-secondary-focus grid" defaultValue={locale} onChange={toggleLocale} title={d.language_switcher_title}>
                                    <option value="en-US">EN-US</option>
                                    <option value="pt-BR">PT-BR</option>
                                </select>
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
            </div >
        </div >
    </header >
}