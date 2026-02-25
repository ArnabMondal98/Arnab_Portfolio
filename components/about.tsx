import { MapPin, Briefcase, GraduationCap, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="Who I am" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m a Data Analyst with 4+ years of experience at Cognizant,
              delivering high-quality analytics, reporting, and data validation
              solutions across 8+ enterprise projects. I specialize in SQL, Python,
              statistical analysis, and Power BI to extract insights from large datasets
              and support data-driven product and business decisions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;ve improved system performance by up to 40%, ensured 95% data
              accuracy, and automated reporting workflows that reduced manual effort
              by 30%. I&apos;m passionate about building scalable data solutions
              and translating complex analytical findings into clear, actionable insights.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <InfoCard icon={MapPin} label="Location" value="Kolkata, India" />
            <InfoCard icon={Briefcase} label="Experience" value="4+ Years at Cognizant" />
            <InfoCard icon={GraduationCap} label="Degree" value="MCA, University of Mysore" />
            <InfoCard icon={Globe} label="Languages" value="English, Bengali, Hindi, German" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-16">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
