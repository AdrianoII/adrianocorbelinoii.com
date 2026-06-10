import type { Metadata } from "next"
import Image from "next/image"

import { about } from "@/content/site"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
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
          <h1>{about.greeting}</h1>
          <p>{about.bio}</p>
        </article>
        <p className="text-xl text-[hsl(var(--gold))] lg:text-2xl">
          {about.findMe}
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}
