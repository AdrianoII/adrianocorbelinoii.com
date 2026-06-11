export const siteConfig = {
  name: "Adriano Corbelino II",
  title: "Adriano Corbelino II",
  description:
    "Adriano Corbelino II — Brazilian computer scientist and CS PhD student researching programming languages, type theory, and formal verification.",
  url: "https://www.adrianocorbelinoii.com",
  email: "adrianocorbelinoii@gmail.com",
} as const

export const about = {
  greeting: "Hello There!",
  // **word** marks a gold highlight; [text](url) becomes a rose link.
  bio: [
    "I am Adriano, a third-year Computer Science PhD student at the **University of Massachusetts Lowell**, advised by [Dr. Paul Downen](https://pauldownen.com/).",
    "My research explores how we can merge programming paradigms — using **codata** to bridge the gap between the **functional** and **object-oriented** worlds. If that sounds interesting, check out my current project **CoPy**, which takes the converse route and brings **copatterns** to Python.",
  ],
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
