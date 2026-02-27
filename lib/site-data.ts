// ============================================================
// ADMIN DATA LAYER - Edit this file to update all site content
// All portfolio content is centralized here for easy maintenance.
// Adding new projects, certifications, or experiences only
// requires editing the arrays below — no layout changes needed.
// ============================================================

export const siteConfig = {
  name: "Arnab Mondal",
  title: "Enterprise Data Analyst",
  tagline:
    "Delivering scalable analytics & cloud-based data solutions for enterprise environments.",
  subtitle:
    "4+ years of experience optimizing SQL pipelines, designing validation frameworks, building ETL processes, and delivering BI dashboards across Dev, QA, and Production environments.",
  availability:
    "Open to UK / EU Opportunities  |  Open to Relocation  |  Visa Sponsorship Welcome",
  resumeUrl: "/ARNAB-MONDAL-DA-Resume.pdf",
  profileImage: "/images/arnab-profile.jpg",
  githubUrl: "https://github.com/ArnabMondal98",
  linkedinUrl: "https://www.linkedin.com/in/arnabmondal98",
  email: "arnabmondal040725@gmail.com",
  phone: "+91 8013901890",
  location: "Kolkata, India",
}

export const impactMetrics = [
  { value: "25%", label: "Performance Improvement", detail: "via SQL Optimization" },
  { value: "95%+", label: "Data Accuracy", detail: "through Validation Frameworks" },
  { value: "1M+", label: "Records Processed", detail: "across Enterprise Environments" },
  { value: "30%", label: "Reporting Automation", detail: "Manual Effort Reduced" },
  { value: "8+", label: "Enterprise Projects", detail: "Delivered at Cognizant" },
]

export const techEnvironment = [
  { category: "Databases", items: ["SQL Server", "PostgreSQL"] },
  { category: "Cloud & Processing", items: ["Azure Databricks", "AWS"] },
  { category: "Environments", items: ["Dev / QA / Production Systems"] },
  { category: "Data Pipelines", items: ["ETL Pipelines", "Data Modeling"] },
  { category: "Governance", items: ["Data Governance", "Data Validation"] },
  { category: "APIs", items: ["REST API Development", "Swagger UI"] },
  { category: "Data Engineering", items: ["BI Reporting Automation", "Python Scripting"] },
  { category: "Dashboarding", items: ["Power BI", "Tableau"] },
]

export const competencies = [
  {
    icon: "Database" as const,
    title: "SQL & Databases",
    description:
      "Advanced SQL optimization, PostgreSQL, SQL Server, data extraction and validation across Dev, QA, and Production environments with 500K-1M+ records.",
  },
  {
    icon: "Code2" as const,
    title: "Python & Automation",
    description:
      "Pandas, NumPy, Matplotlib, Seaborn for data analysis, reporting automation, and building REST APIs. Reduced manual effort by 30%.",
  },
  {
    icon: "BarChart3" as const,
    title: "BI & Dashboarding",
    description:
      "Power BI, Tableau, and Excel. Interactive KPI dashboards, reusable analytical modules, and executive reporting for business intelligence.",
  },
  {
    icon: "BrainCircuit" as const,
    title: "Analytics Methods",
    description:
      "Statistical Analysis, Exploratory Data Analysis (EDA), Root Cause Analysis, Predictive Analytics, and customer retention modeling.",
  },
  {
    icon: "Layers" as const,
    title: "Data Engineering & ETL",
    description:
      "ETL pipelines, data cleaning, data modeling, data validation, data warehousing, and Azure Databricks for scalable processing.",
  },
  {
    icon: "PieChart" as const,
    title: "Data Visualization",
    description:
      "Turning complex datasets into clear, interactive visuals using Power BI, Tableau, Matplotlib, Seaborn, and Plotly for stakeholder buy-in.",
  },
]

export const experiences = [
  {
    period: "Oct 2021 — Present",
    title: "Data Analyst (Product Analytics)",
    company: "Cognizant",
    logo: "/logos/cognizant.jpg",
    location: "Kolkata, India",
    bullets: [
      "Analyzed application and database performance across 8+ enterprise projects, identifying data bottlenecks and improving system efficiency by 25% through SQL optimization and Azure Databricks.",
      "Developed and optimized complex SQL pipelines to extract, transform, and validate 500K-1M+ records across Dev, QA, and Production environments using SQL Server and Databricks.",
      "Built scalable data validation and reconciliation frameworks ensuring 95% data accuracy, regulatory compliance, and end-to-end data integrity.",
      "Performed root-cause analysis and defect triage for data discrepancies, resolving 95% of issues within SLA timelines.",
      "Automated Excel, Power BI, and Tableau reporting using Python (Pandas, NumPy, Matplotlib, Seaborn), reducing manual effort by 30%.",
      "Designed interactive Power BI and Tableau dashboards and reusable analytical modules for BI, performance testing, and operational reporting.",
      "Delivered advanced analytics use cases including customer retention (+15%) and insurance claims analysis using SQL, Python, Azure Databricks, and BI tools.",
    ],
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Azure Databricks",
      "SQL Server",
      "Excel",
    ],
  },
]
export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  pdf?: string;
  image?: string;
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string;
  certificate?: string;
};
export interface Project {
  title: string
  subtitle: string
  period: string
  problem: string
  approach: string
  tools: string[]
  impact: string
  liveUrl?: string
  githubUrl?: string
  slug?: string
  featured?: boolean
  architectureImage?: string   
}

export const projects: Project[] = [
  {
    title: "Data Quality Watchtower",
    subtitle: "Data Validation & Monitoring Platform",
    period: "2025 - 2026",
    problem:
      "Analytics teams lacked automated data quality checks, leading to unreliable downstream reporting and eroded stakeholder trust in data outputs.",
    approach:
      "Built and deployed an end-to-end data quality monitoring platform with automated rule-based checks (nulls, schema, range, consistency) and Python-based REST APIs with Swagger UI.",
    tools: ["Python", "REST API", "Swagger UI", "Vercel"],
    impact:
      "Delivered a live web application for dataset uploads and data health monitoring, improving trust and efficiency in downstream reporting and decision-making.",
    liveUrl: "https://dataqualitywatchtower.vercel.app/",
    githubUrl: "https://github.com/ArnabMondal98/dataqualitywatchtower",
    featured: true,
  },
  {
    title: "Retail Analytics Pipeline",
    subtitle: "End-to-End Retail Data Analytics",
    period: "2025",
    problem:
      "Retail businesses struggled with fragmented data across sales, inventory, and customer channels, limiting visibility into performance drivers.",
    approach:
      "Designed a complete analytics pipeline covering data ingestion, transformation, and visualization to surface actionable retail KPIs and trends.",
    tools: ["Python", "SQL", "Power BI", "Pandas"],
    impact:
      "Enabled real-time retail performance tracking with interactive dashboards, empowering data-driven inventory and sales strategy decisions.",
    liveUrl: "https://retail-analytics-pipeline.vercel.app/",
    githubUrl: "https://github.com/ArnabMondal98/Retail_Analytics_Pipeline",
    slug: "retail-analytics-pipeline",
    featured: true,
  },
  {
    title: "Financial Operations Analytics",
    subtitle: "Finance Data Analysis & Reporting",
    period: "2025",
    problem:
      "Financial teams relied on manual spreadsheet-based reporting, causing delays in identifying cost anomalies and revenue trends.",
    approach:
      "Built a Streamlit-based analytics application for financial operations data with interactive filtering, trend analysis, and automated reporting features.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly"],
    impact:
      "Streamlined financial reporting workflows and enabled faster detection of cost outliers and revenue patterns through interactive visualizations.",
    liveUrl: "https://financialoperationsanalytics.streamlit.app/",
    githubUrl: "https://github.com/ArnabMondal98/Financial_Operations_Analytics",
    featured: true,
  },
  {
    title: "Healthcare Decision Intelligence",
    subtitle: "Healthcare Analytics Dashboard",
    period: "2025",
    problem:
      "Healthcare administrators lacked consolidated views of patient outcomes, operational metrics, and resource utilization across departments.",
    approach:
      "Developed an interactive healthcare analytics dashboard with Streamlit, providing multi-dimensional analysis of clinical and operational data.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly"],
    impact:
      "Provided actionable intelligence for healthcare decision-makers, improving visibility into patient outcomes and operational efficiency metrics.",
    liveUrl: "https://healthcaredecisionintelligenceanalytics.streamlit.app/",
    githubUrl:
      "https://github.com/ArnabMondal98/Healthcare_Decision_Intelligence_Analytics",
    featured: true,
  },
  {
    title: "Dynamic Scatter Plot Visualization App",
    subtitle: "Interactive Data Exploration Tool",
    period: "2025",
    problem:
      "Exploratory data analysis required repetitive manual charting in notebooks, slowing down the analysis cycle for non-technical stakeholders.",
    approach:
      "Developed a Streamlit + Plotly application enabling dynamic, user-driven data visualization with real-time Excel inputs and statistical features.",
    tools: ["Python", "Streamlit", "Plotly", "Pandas"],
    impact:
      "Implemented outlier detection, Z-score normalization, trendlines, and automated exports, enabling faster exploratory analysis for business users.",
    githubUrl: "https://github.com/ArnabMondal98/ScatterPlot_App",
  },
]

export const certifications = [
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks Academy",
    year: "2025",
    image: "/certificates/databricks-fundamentals.png"
  },
  {
    name: "Cloud Computing with AWS Training",
    issuer: "Internshala Trainings",
    year: "2021",
    pdf: "/certificates/Cloud-Computing-with-AWS-Training.pdf",
  },
  {
    name: "Certified Data Science Associate Program",
    issuer: "Indian Council for Technical Research and Development",
    year: "2025",
    //pdf: "/certificates/Certified Data Science Associate Program_Exam_Certificate.pdf",
    pdf: "/certificates/DataScience-Associate-Program_Certificate.pdf",
  },
  {
    name: "SQL: Data Reporting and Analysis",
    issuer: "LinkedIn Learning",
    year: "2025",
    pdf: "/certificates/CertificateOfCompletion_SQL_DataReporting-Analysis.pdf",
  },
  {
    name: "SQL for Data Science",
    issuer: "LinkedIn Learning",
    year: "2025",
    pdf: "/certificates/Career-Essentials-DataAnalysis-Microsoft_LinkedIn.pdf",
  },
   {
    name: "Introduction to Data Science",
    issuer: "CISCO Networking Academy",
    year: "2026",
    pdf: "/certificates/IntrotoDataScience_Cisco.pdf",
  },
]

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "University of Mysore",
    location: "Mysore, India",
    period: "May 2022 — Aug 2024",
    details:
      "CGPA: 9.0. Focus on advanced computing, data structures, and software engineering with specialization in data analytics and database management systems.",
    certificate: "/certificates/Arnab_MCA_Degree.pdf"  
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Techno Main Saltlake",
    location: "Kolkata, India",
    period: "Jul 2017 — Aug 2020",
    details:
      "CGPA: 7.2. Foundation in computer science, programming fundamentals, and database systems with practical projects in data processing and application development.",
  },
]

export const course = {
  title: "Business Analytics",
  provider: "UpGrad Campus",
  completedDate: "Feb 2023",
  description:
    "Completed a comprehensive Business Analytics program covering data-driven decision-making, data analysis techniques, and predictive modeling. The curriculum was designed to equip professionals with the tools and knowledge needed to excel in today's competitive business landscape, from mastering analytical frameworks to applying statistical methods for real-world business problems.",
  skills: [
    "Data Analysis",
    "Predictive Modeling",
    "Business Intelligence",
    "Statistical Methods",
    "Data-Driven Decision Making",
  ],
  certificate: "/certificates/ArnabMondal_Upgrad_BA_Certificate.pdf"
}

export const expandingExpertise = [
  "Cloud Data Engineering",
  "Scalable Data Architecture",
  "Azure Data Services",
  "Modern Data Platforms",
  "Data Platform Governance",
]

export const contactLinks = [
  {
    icon: "Mail" as const,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "Linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/arnabmondal98",
    href: siteConfig.linkedinUrl,
  },
  {
    icon: "Github" as const,
    label: "GitHub",
    value: "github.com/ArnabMondal98",
    href: siteConfig.githubUrl,
  },
  {
    icon: "Phone" as const,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
]
