import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"

export default function RetailAnalyticsCaseStudy() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Back nav */}
      <div className="border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Case Study
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Retail Analytics Pipeline
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            End-to-end retail data analytics solution covering data ingestion,
            transformation, and interactive visualization for actionable business
            intelligence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://retail-analytics-pipeline.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ArnabMondal98/Retail-Analytics-Pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Architecture Diagram
          </h2>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/arch-retail-analytics.jpg"
              alt="Retail Analytics Pipeline architecture diagram"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Business Context */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Business Context
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Retail businesses often operate with fragmented data across sales
            channels, inventory management systems, and customer engagement
            platforms. This fragmentation limits visibility into key performance
            drivers, prevents timely decision-making, and leads to missed
            revenue opportunities. The objective was to build a unified analytics
            pipeline that consolidates disparate data sources into a single,
            interactive reporting layer accessible to business stakeholders.
          </p>
        </section>

        {/* Data Flow */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Data Flow</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                step: "1",
                title: "Data Ingestion",
                desc: "Raw retail data (sales transactions, inventory levels, customer records) is ingested from CSV/Excel sources and database exports.",
              },
              {
                step: "2",
                title: "Data Cleaning & Transformation",
                desc: "Python (Pandas) processes handle missing values, data type conversions, outlier detection, and feature engineering for analytical readiness.",
              },
              {
                step: "3",
                title: "Data Modeling & Storage",
                desc: "Transformed data is structured into a star schema with fact and dimension tables optimized for analytical queries via SQL.",
              },
              {
                step: "4",
                title: "Analytics & Visualization",
                desc: "Interactive dashboards built with Power BI and the web application surface KPIs including revenue trends, inventory turnover, and customer segmentation.",
              },
              {
                step: "5",
                title: "Deployment",
                desc: "The application is deployed on Vercel for production-grade availability, with automated CI/CD from the GitHub repository.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Technical Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { category: "Language", items: ["Python 3.x"] },
              { category: "Data Processing", items: ["Pandas", "NumPy"] },
              { category: "Visualization", items: ["Power BI", "Plotly", "Matplotlib"] },
              { category: "Database", items: ["SQL", "Structured Queries"] },
              { category: "Deployment", items: ["Vercel", "GitHub CI/CD"] },
              { category: "Web Framework", items: ["Next.js / Streamlit"] },
            ].map((stack) => (
              <div
                key={stack.category}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {stack.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Solved */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Challenges Solved
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Normalized inconsistent data formats across multiple retail source systems with varying schemas and encoding.",
              "Handled missing and incomplete records through intelligent imputation strategies that preserved statistical integrity.",
              "Optimized SQL queries for analytical workloads on datasets exceeding 500K records while maintaining sub-second dashboard response.",
              "Designed a modular pipeline architecture allowing new data sources to be onboarded without refactoring existing transforms.",
            ].map((challenge, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* Scalability Considerations */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Scalability Considerations
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Pipeline architecture supports horizontal scaling via partitioned processing for growing retail datasets.",
              "Modular ETL design allows independent scaling of ingestion, transformation, and visualization layers.",
              "Cloud-deployed on Vercel with edge caching for global low-latency dashboard access.",
              "Database schema designed for efficient analytical queries with indexed fact tables and pre-aggregated views.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Impact</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { metric: "Real-time", desc: "Retail performance tracking" },
              { metric: "Automated", desc: "KPI reporting pipeline" },
              { metric: "Scalable", desc: "Architecture for growth" },
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-lg border border-border bg-card p-5 text-center"
              >
                <p className="text-lg font-bold text-primary">{item.metric}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-semibold text-foreground">
              Interested in this type of work?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              I&apos;m open to enterprise data analytics roles and consulting.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </main>
  )
}
