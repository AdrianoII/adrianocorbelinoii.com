import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react"

import { socialLinks, type SocialLink } from "@/content/site"
import { Button } from "@/components/ui/button"

const icons: Record<SocialLink["icon"], LucideIcon> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
}

/* one sunset hue per icon; hover:text-* repeats the color so the ghost
   variant's hover:text-accent-foreground doesn't wash it out */
const iconColors: Record<SocialLink["icon"], string> = {
  mail: "text-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]",
  github: "text-primary hover:text-primary",
  linkedin: "text-[hsl(var(--rose))] hover:text-[hsl(var(--rose))]",
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link) => {
        const Icon = icons[link.icon]
        return (
          <Button
            key={link.label}
            asChild
            variant="ghost"
            size="icon"
            className={`size-12 [&_svg]:size-7 ${iconColors[link.icon]}`}
          >
            <a
              href={link.href}
              title={link.title}
              aria-label={link.label}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
            >
              <Icon aria-hidden />
            </a>
          </Button>
        )
      })}
    </div>
  )
}
