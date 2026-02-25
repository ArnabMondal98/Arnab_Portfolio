import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/site-data"
import { profile } from "@/data/profile"

const architectureImage: Record<string, string> = {
  "Data Quality Watchtower": "/images/arch-data-quality.jpg",
  "Retail Analytics Pipeline": "/images/arch-retail-analytics.jpg",
  "Financial Operations Analytics": "/images/arch-financial-ops.jpg",
  "Healthcare Decision Intelligence": "/images/arch-healthcare.jpg",
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Projects
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Production-ready projects
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:flex"
          >
            <Github className="h-4 w-4" />
            View All on GitHub
          </a>
        </div>
        <p className="mb-12 max-w-3xl text-sm text-muted-foreground">
          Each project follows enterprise patterns: scalable architecture, data
          governance, production deployment, and measurable business impact.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project) => {
            const diagram = project.architectureImage
              return (
              <article
              key={project.title}
              className="group rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
            >
                {/* Header */}
                <div className="flex flex-col gap-4 p-6 pb-0 md:flex-row md:items-start md:justify-between md:p-8 md:pb-0">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.subtitle} &middot; {project.period}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        Live Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        aria-label={`View GitHub repo of ${project.title}`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        Repository
                      </a>
                    )}
                    {project.slug && (
                      <Link
                        href={`/case-study/${project.slug}`}
                        className="flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        Deep Dive
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Architecture Diagram */}
                {diagram && (
                  <div className="px-6 pt-6 md:px-8">
                    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md border border-border">
                      <Image
                        src={diagram}
                        alt={`Architecture diagram for ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority={false}
                      />
                    </div>
                  </div>
                )}

                {/* Case study blocks */}
                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
                  <CaseStudyBlock label="Problem Statement" content={project.problem} />
                  <CaseStudyBlock
                    label="Approach / Architecture"
                    content={project.approach}
                  />
                  <CaseStudyBlock
                    label="Tools Used"
                    content={
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    }
                  />
                  <CaseStudyBlock
                    label="Business Impact"
                    content={project.impact}
                  />
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function CaseStudyBlock({
  label,
  content,
}: {
  label: string
  content: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        {label}
      </p>
      {typeof content === "string" ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
      ) : (
        content
      )}
    </div>
  )
}
