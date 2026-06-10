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
      <body className="flex min-h-dvh flex-col items-center px-4 sm:px-8">
        <div className="flex w-full max-w-4xl flex-1 flex-col">
          <NavBar />
          <main className="flex flex-1 flex-col">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
