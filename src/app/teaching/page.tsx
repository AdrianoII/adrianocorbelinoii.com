import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teaching",
  alternates: {
    canonical: "/teaching",
  },
}

export default function TeachingPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="text-4xl font-bold lg:text-6xl">Teaching</h1>
      <p className="text-lg text-muted-foreground lg:text-xl">
        🚧 Coming soon — teaching materials and notes are on the way.
      </p>
    </section>
  )
}
