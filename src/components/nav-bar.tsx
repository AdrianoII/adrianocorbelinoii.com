"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Poiret_One } from "next/font/google"

import { cn } from "@/lib/utils"
import { navItems, siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const poiret = Poiret_One({ subsets: ["latin-ext"], weight: "400" })

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between gap-4 py-4">
      <Link
        href="/"
        title="Homepage"
        className={cn(
          poiret.className,
          "text-2xl tracking-wide transition-opacity hover:opacity-80 lg:text-4xl"
        )}
      >
        {siteConfig.name}
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 lg:flex">
        {navItems.map((item) => (
          <Button
            key={item.href}
            asChild
            variant="ghost"
            className={cn(
              "text-base",
              isActive(pathname, item.href) &&
                "border-b-2 border-foreground rounded-none"
            )}
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <SheetTitle className={cn(poiret.className, "text-2xl")}>
            {siteConfig.name}
          </SheetTitle>
          <nav className="mt-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <Button
                  asChild
                  variant={isActive(pathname, item.href) ? "secondary" : "ghost"}
                  className="justify-start text-base"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
