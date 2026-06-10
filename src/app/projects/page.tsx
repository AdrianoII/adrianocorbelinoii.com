import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 py-16 text-center">
      <h1 className="text-4xl font-bold lg:text-6xl">Projects</h1>
      <p className="text-lg text-muted-foreground lg:text-xl">
        🚧 Coming soon — something interactive is in the works.
      </p>
    </section>
  )
}
