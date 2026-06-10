"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Poiret_One } from "next/font/google"

import { cn } from "@/lib/utils"
import { navItems, siteConfig } from "@/content/site"

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" })

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function NavBar() {
  const pathname = usePathname()

  return (
    <header className="flex flex-col items-center gap-3 py-4 sm:flex-row sm:justify-between sm:gap-6">
      <Link
        href="/"
        title="Homepage"
        className={cn(
          poiret.className,
          "text-sunset-animated text-2xl tracking-wide transition-opacity hover:opacity-80 lg:text-4xl"
        )}
      >
        {siteConfig.name}
      </Link>

      <nav className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-base transition-colors lg:text-lg",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
                "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform",
                active ? "after:scale-x-100" : "hover:after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
