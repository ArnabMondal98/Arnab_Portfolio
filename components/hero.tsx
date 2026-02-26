import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"
import { profile } from "@/data/profile"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Profile Image */}
        <div className="mb-8 flex justify-center opacity-0 animate-fade-in-up">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Arnab_Portfolio+Picture.jpg"
              alt="Arnab Mondal"
              width={240}
              height={240}
              className="rounded-full border-4 border-primary shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Role Line */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary opacity-0 animate-fade-in-up animate-delay-100">
          {profile.title}
        </p>

        {/* Main Heading */}
        <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {profile.shortHeadline}
        </h1>

        {/* Summary */}
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground whitespace-pre-line">
          {profile.summary}
        </p>

        {/* Availability */}
        <div className="mt-8 opacity-0 animate-fade-in-up animate-delay-400">
          <p className="inline-block rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-medium tracking-wide text-primary sm:text-sm">
            {profile.openTo}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-400 sm:flex-row">
          
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </a>

          <a
            href="/ARNAB-MONDAL-DA-Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#metrics"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to impact metrics section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
