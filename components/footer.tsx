import { Download } from "lucide-react"
import { siteConfig } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.resumeUrl}
            download
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
          <p className="text-sm text-muted-foreground">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
