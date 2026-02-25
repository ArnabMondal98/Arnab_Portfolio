import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Competencies } from "@/components/competencies"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Course } from "@/components/course"
import { Certifications } from "@/components/certifications"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <Projects />
        <Course />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
