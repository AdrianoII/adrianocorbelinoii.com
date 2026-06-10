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
    <section className="flex flex-1 flex-col items-center gap-8 py-8 lg:flex-row lg:gap-12 lg:py-0">
      <div className="slit-in-diagonal relative aspect-square w-full max-w-sm lg:max-w-md lg:flex-1">
        <Image
          src="/profile.webp"
          alt="Picture of Adriano Corbelino II"
          fill
          priority
          sizes="(min-width: 1024px) 28rem, 24rem"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center lg:flex-1">
        <article className="prose prose-invert max-w-prose lg:prose-xl">
          <h1>{about.greeting}</h1>
          <p>{about.bio}</p>
        </article>
        <p className="text-xl text-muted-foreground lg:text-2xl">
          {about.findMe}
        </p>
        <SocialLinks />
      </div>
    </section>
  )
}
