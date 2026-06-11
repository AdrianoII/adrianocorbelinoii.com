import type { Metadata } from "next"
import Image from "next/image"

import { about } from "@/content/site"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

/* renders the bio's mini-markup: **text** → gold highlight,
   [text](url) → rose external link */
function renderBio(text: string) {
  const highlight = "font-semibold text-[hsl(var(--gold))]"
  const link = "font-semibold text-[hsl(var(--rose))]"
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, i) => {
      const bold = part.match(/^\*\*([^*]+)\*\*$/)
      if (bold) {
        return (
          <strong key={i} className={highlight}>
            {bold[1]}
          </strong>
        )
      }
      const anchor = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (anchor) {
        return (
          <a
            key={i}
            href={anchor[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link} underline underline-offset-4 hover:text-primary`}
          >
            {anchor[1]}
          </a>
        )
      }
      return part
    })
}

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 py-8">
      <div className="slit-in-diagonal relative aspect-square w-full max-w-sm">
        <Image
          src="/profile.jpg"
          alt="Picture of Adriano Corbelino II"
          fill
          priority
          quality={90}
          sizes="(min-width: 640px) 384px, 90vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <article className="prose prose-invert max-w-prose lg:prose-xl">
          <h1>
            {/* the wave stays outside the gradient span: bg-clip-text would
                render the emoji transparent */}
            <span className="text-twilight">{about.greeting}</span> 👋
          </h1>
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{renderBio(paragraph)}</p>
          ))}
        </article>
        <p className="text-xl text-[hsl(var(--gold))] lg:text-2xl">
          {about.findMe}
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}
