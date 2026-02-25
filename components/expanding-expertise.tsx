import { TrendingUp } from "lucide-react"
import { expandingExpertise } from "@/lib/site-data"

export function ExpandingExpertise() {
  return (
    <section id="expanding" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Growth
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Currently expanding expertise in
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {expandingExpertise.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <TrendingUp className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
