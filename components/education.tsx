import { GraduationCap } from "lucide-react"
import { education } from "@/lib/site-data"

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div>
            <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
              Education
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Academic Background
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>

              {edu.certificate && (
                <a
                  href={edu.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  View Degree Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}