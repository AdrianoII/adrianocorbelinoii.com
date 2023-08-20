import type { Metadata } from "next"
import NavBar from "../../components/NavBar/NavBar"
import "../globals.css"
import { i18n } from "../../i18n-config"
import { ThemeProvider } from "../../components/ThemeProvider"
import { getDictionary } from './dictionaries'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Adriano Corbelino II",
  description: "Adriano Corbelino II Homepage",
}

export async function generateStaticParams() {
  return i18n.locales.map(async (locale) => ({ locale: locale }))
}

type Params = {
  children: React.ReactNode,
  params: { locale: "en-US" | "pt-BR" },
}

// Why can't I do a nested destruction here?
export default async function RootLayout({ children, params }: Params) {
  const dict = await getDictionary(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="flex flex-col px-4 lg:h-screen lg:w-screen lg:px-16 lg:py-4 lg:max-h-screen">
        <ThemeProvider>
          <NavBar locale={params.locale} dict={dict} />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html >
  )
}