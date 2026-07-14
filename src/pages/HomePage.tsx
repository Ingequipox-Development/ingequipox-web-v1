import { Hero } from "../components/hero";
import { StatsBar } from "../components/stats-bar";
import { Experience } from "../components/experience";
import { Clients } from "../components/clients";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Services } from "../components/services"; // versión interactiva con Tabs
import { Services1 } from "../components/services-1"; // version zig-zag
import { Services2 } from "../components/services-2"; // version tarjetas + botón pagina de servicios
import { AboutUs } from "../components/about";
import { AboutUs1 } from "../components/about1";

export function HomePage() {
    return (
        <>
            <Hero />
            <StatsBar />
            <Experience />
            <Services />
            {/*<Services1 />*/}
            <Services2 />
            <Clients />
            <Projects />
            {/*<AboutUs />*/}
            <AboutUs1 />
            <Contact />
        </>
    )
}