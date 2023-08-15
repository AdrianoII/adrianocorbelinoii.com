'use client'

import { ThemeProvider as ThemeProviderNext } from 'next-themes'

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <ThemeProviderNext>{children}</ThemeProviderNext>
}