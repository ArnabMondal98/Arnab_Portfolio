import { Mail, Linkedin, Github, Phone } from "lucide-react"
import { contactLinks, siteConfig } from "@/lib/site-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
  Phone,
}

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s connect
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m open to full-time enterprise data analyst roles,
              freelance consulting, and collaboration opportunities. Currently
              based in {siteConfig.location} and open to relocation globally.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Feel free to reach out &mdash; I&apos;d love to hear about what
              you&apos;re working on.
            </p>
            <div className="mt-6">
              <p className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium tracking-wide text-primary">
                {siteConfig.availability}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
