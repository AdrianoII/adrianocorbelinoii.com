import type { Metadata } from "next"

import { cv } from "@/content/site"

export const metadata: Metadata = {
  title: "CV",
  alternates: {
    canonical: "/cv",
  },
}

export default function CvPage() {
  return (
    <section className="flex flex-1 flex-col gap-4 py-4">
      <p className="text-center text-lg lg:text-2xl">
        {cv.intro}{" "}
        <a
          href={cv.pdfUrl}
          className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
        >
          here
        </a>{" "}
        and{" "}
        <a
          href={cv.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
        >
          there
        </a>
        .
      </p>
      <iframe
        src={cv.viewerUrl}
        title="Adriano Corbelino II — CV"
        className="min-h-[70vh] w-full flex-1 rounded-md border border-border"
      />
    </section>
  )
}
