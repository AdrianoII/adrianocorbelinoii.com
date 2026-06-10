export const siteConfig = {
  name: "Adriano Corbelino II",
  title: "Adriano Corbelino II",
  description:
    "Adriano Corbelino II — Brazilian computer scientist and CS PhD student researching programming languages, type theory, and formal verification.",
  url: "https://www.adrianocorbelinoii.com",
  email: "adrianocorbelinoii@gmail.com",
} as const

export const about = {
  greeting: "Hello There! 👋",
  bio: "I am a Brazilian computer scientist who is constantly thrilled with the impact type systems can have on users. I have experience working with software development and my three main interests are Type Theory, Formal Verification, and Systems Programming.",
  findMe: "👇 You can find me on 👇",
} as const

export const cv = {
  // Authored in cv/cv.qmd (Quarto); `cv/build.sh` regenerates the PDF below
  // and the injected HTML fragment at src/content/cv.generated.html.
  pdfUrl: "/cv_adrianoii.pdf",
  sourceUrl: "https://github.com/AdrianoII/adrianocorbelinoii.com/blob/main/cv/cv.qmd",
  email: "adriano_vilargacorbelino@uml.edu",
  location: "Lowell, MA, USA",
  links: [
    { label: "GitHub", href: "https://github.com/AdrianoII" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adrianoii/" },
  ],
} as const

export type NavItem = {
  readonly href: Route
  readonly label: string
}

export const navItems = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/teaching", label: "Teaching" },
  { href: "/cv", label: "CV" },
] as const satisfies readonly NavItem[]

export type Route = "/" | "/cv" | "/projects" | "/teaching"

export type SocialLink = {
  readonly label: string
  readonly title: string
  readonly href: string
  readonly icon: "mail" | "github" | "linkedin"
}

export const socialLinks = [
  {
    label: "Email",
    title: "My Email",
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    label: "GitHub",
    title: "My GitHub Profile",
    href: "https://github.com/AdrianoII",
    icon: "github",
  },
  {
    label: "LinkedIn",
    title: "My LinkedIn Profile",
    href: "https://www.linkedin.com/in/adrianoii/?locale=en_US",
    icon: "linkedin",
  },
] as const satisfies readonly SocialLink[]
