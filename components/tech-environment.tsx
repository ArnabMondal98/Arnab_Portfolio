import { techEnvironment } from "@/lib/site-data"
import {
  Database,
  Cloud,
  GitBranch,
  Workflow,
  Shield,
  Code2,
  Settings,
  BarChart3,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Databases: Database,
  "Cloud & Processing": Cloud,
  Environments: GitBranch,
  "Data Pipelines": Workflow,
  Governance: Shield,
  APIs: Code2,
  Automation: Settings,
  Dashboarding: BarChart3,
}

export function TechEnvironment() {
  return (
    <section id="tech-environment" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Enterprise Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Technical environment
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techEnvironment.map((env) => {
            const Icon = iconMap[env.category] || Database
            return (
              <div
                key={env.category}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {env.category}
                  </h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  {env.items.map((item) => (
                    <p
                      key={item}
                      className="text-xs leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
