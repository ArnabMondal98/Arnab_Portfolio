import { BookOpen } from "lucide-react"
import { course } from "@/lib/site-data"

export function Course() {
  return (
    <section id="course" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Course
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Professional development
          </h2>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {course.title}
                </h3>
                <p className="text-sm font-medium text-primary">
                  Completed {course.completedDate}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {course.provider}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
