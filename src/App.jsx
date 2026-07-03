import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { AboutUs } from "@/components/about"
import { Clients } from "@/components/clients"

export default function App() {
  return (
    <main className="bg-background">
      <SiteNav />
      <Hero />
      <StatsBar />
      <Experience />
      <Clients />
      <Projects />
      <AboutUs />
      <Contact />
      <SiteFooter />
    </main>
  )
}
