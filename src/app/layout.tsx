import type { Metadata } from "next"
import NavBar from "../components/NavBar/NavBar"
import "./globals.css"
import { Providers } from "../components/Provider"

export const metadata: Metadata = {
  title: "Adriano II",
  description: "Adriano Corbelino II",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="h-screen w-screen px-16 py-4 flex flex-col">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html >
  )
}