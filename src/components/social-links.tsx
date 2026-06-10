import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react"

import { socialLinks, type SocialLink } from "@/content/site"
import { Button } from "@/components/ui/button"

const icons: Record<SocialLink["icon"], LucideIcon> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
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
            className="size-12 [&_svg]:size-7"
          >
            <a
              href={link.href}
              title={link.title}
              aria-label={link.label}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
            >
              <Icon />
            </a>
          </Button>
        )
      })}
    </div>
  )
}
