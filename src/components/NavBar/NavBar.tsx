"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Poiret_One } from "next/font/google"
import ThemeToggler from "./ThemeToggler";

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" });

export default function NavBar() {
    const path = usePathname();

    return <header className="basis-1/12">
        <nav className="navbar">
            <div className="navbar-start">
                <div className=" w-4/5 text-center">
                    <Link href="/">
                        <button className="btn btn-ghost normal-case text-4xl no-animation">
                            <div className={poiret.className}>Adriano Corbelino II</div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="tabs basis-9/12 justify-end">
                    <Link href="/">
                        <button className={`tab tab-lg tab-bordered ${path === "/" ? "tab-active" : ""}`}>About</button>
                    </Link>
                    <Link href="/projects">
                        <button className={`tab tab-lg tab-bordered ${path === "/projects" ? "tab-active" : ""}`}>Projects</button>
                    </Link>
                    <Link href="/cv">
                        <button className={`tab tab-lg tab-bordered ${path === "/cv" ? "tab-active" : ""}`}>CV</button>
                    </Link>
                </div>
                <div className="basis-1/12 justify-center">
                    <select className="select select-bordered select-sm ">
                        <option>EN</option>
                        <option>PT</option>
                    </select>
                </div>
                <div className="basis-2/12 justify-center" >
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    </header >
}