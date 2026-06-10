import { readFileSync } from "node:fs"
import { join } from "node:path"
import type { Metadata } from "next"
import { Download } from "lucide-react"

import { cv, siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "CV",
  description:
    "The CV of Adriano Corbelino II — education, research, publications, teaching, and industry experience, available as a downloadable PDF.",
  alternates: {
    canonical: "/cv",
  },
}

// Generated from cv/cv.qmd by cv/build.sh — a trusted, body-only HTML fragment.
const cvHtml = readFileSync(
  join(process.cwd(), "src/content/cv.generated.html"),
  "utf8"
)

export default function CvPage() {
  return (
    <section className="flex flex-1 flex-col gap-6 py-6">
      <header className="flex flex-col gap-4 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold lg:text-4xl">{siteConfig.name}</h1>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <a
              href={`mailto:${cv.email}`}
              className="hover:text-foreground"
            >
              {cv.email}
            </a>
            <span aria-hidden>·</span>
            <span>{cv.location}</span>
            {cv.links.map((link) => (
              <span key={link.href} className="contents">
                <span aria-hidden>·</span>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild>
            <a href={cv.pdfUrl} download>
              <Download aria-hidden />
              Download PDF
            </a>
          </Button>
        </div>
      </header>

      <article
        className="cv-content prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: cvHtml }}
      />
    </section>
  )
}
