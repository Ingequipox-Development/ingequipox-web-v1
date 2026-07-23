import { Hero } from "../components/hero";
import { StatsBar } from "../components/stats-bar";
import { Experience } from "../components/experience";
import { Clients } from "../components/clients";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Services } from "../components/services";
import { AboutUs1 } from "../components/about1";

export function HomePage() {
    return (
        <>
            <Hero />
            <StatsBar />
            <Experience />
            <Services />
            <Clients />
            <Projects />
            <AboutUs1 />
            <Contact />
        </>
    )
}