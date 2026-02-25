import Image from "next/image"
import { certifications } from "@/lib/site-data"

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Certifications
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Credentials & Certifications
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>

              {cert.year && (
                <p className="text-xs text-muted-foreground mt-1">
                  {cert.year}
                </p>
              )}

              {cert.image && (
                <div className="mt-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              )}

              {cert.pdf && (
                <div className="mt-4 flex gap-6">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View Certificate
                  </a>

                  <a
                    href={cert.pdf}
                    download
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
