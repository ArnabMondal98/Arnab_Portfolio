import { experiences } from "@/lib/site-data"
import Image from "next/image"

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.title + exp.company} className="relative md:pl-10">
                <div className="absolute left-0 top-1.5 hidden h-2.5 w-2.5 -translate-x-1 rounded-full bg-primary md:block" />

                <div className="flex flex-col gap-4 lg:flex-row lg:gap-16">
                  <div className="shrink-0 lg:w-48">
                    <p className="text-sm font-medium text-primary">{exp.period}</p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                  
                    <div className="mb-3 flex items-center gap-3">
                      <Image
                        src="/logos/cognizant.jpg"
                        alt="Cognizant"
                        width={55}
                        height={55}
                        className="rounded-sm"
                      />
                      <span className="text-primary font-semibold text-lg tracking-wide">
                        {exp.company}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
