import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title:
    'Arnab Mondal | Enterprise Data Analyst | SQL • Python • Azure Databricks | UK/EU Opportunities',
  description:
    'Enterprise Data Analyst with 4+ years of experience delivering scalable analytics solutions, ETL pipelines, and production-ready BI dashboards across enterprise environments.',
  keywords: [
    'Enterprise Data Analyst',
    'Business Intelligence',
    'SQL',
    'Python',
    'Power BI',
    'Tableau',
    'Azure Databricks',
    'Data Validation',
    'ETL Pipeline',
    'Data Engineering',
    'Data Governance',
    'UK Jobs',
    'EU Jobs',
  ],
  openGraph: {
    title:
      'Arnab Mondal | Enterprise Data Analyst | SQL • Python • Azure Databricks',
    description:
      'Enterprise Data Analyst with 4+ years of experience delivering scalable analytics solutions, ETL pipelines, and production-ready BI dashboards across enterprise environments.',
    type: 'website',
    url: 'https://your-domain.com',
    siteName: 'Arnab Mondal Portfolio',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arnab Mondal",
    url: "https://your-domain.com",
    jobTitle: "Enterprise Data Analyst",
    worksFor: {
      "@type": "Organization",
      name: "Cognizant"
    },
    sameAs: [
      "https://www.linkedin.com/in/arnabmondal98/",
      "https://github.com/ArnabMondal98"
    ],
    skills: [
      "SQL",
      "Python",
      "Azure Databricks",
      "Power BI",
      "ETL Pipelines",
      "Data Validation",
      "Business Intelligence"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "India"
    }
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}