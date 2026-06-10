import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/content/site"
import { NavBar } from "@/components/nav-bar"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex min-h-dvh flex-col px-4 sm:px-8 lg:px-16">
        <NavBar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
