import {
  Database,
  BarChart3,
  BrainCircuit,
  Code2,
  PieChart,
  Layers,
} from "lucide-react"
import { competencies } from "@/lib/site-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Code2,
  BarChart3,
  BrainCircuit,
  Layers,
  PieChart,
}

export function Competencies() {
  return (
    <section id="competencies" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Core Competencies
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I bring to the table
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item) => {
            const Icon = iconMap[item.icon] || Database
            return (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
