import { MapPin, ArrowUpRight } from "lucide-react"

const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "PTAR Yotoco",
    location: "Valle del Cauca",
    category: "Planta de tratamiento",
    image: `${base}project-yotoco.png`,
  },
  {
    name: "Estación de Bombeo Santa Marta",
    location: "Magdalena",
    category: "Estaciones de bombeo",
    image: `${base}project-santamarta.png`,
  },
  {
    name: "Aeropuerto El Dorado",
    location: "Bogotá D.C.",
    category: "Gestión hídrica",
    image: `${base}project-eldorado.png`,
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-green">
            Proyectos destacados
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Infraestructura que transforma territorios
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-white/60">
            Cada obra refleja nuestro compromiso con la calidad, la ingeniería de
            precisión y el cuidado del medio ambiente en distintas regiones del
            país.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Proyecto ${project.name} en ${project.location}`}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--navy-deep) 5%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center rounded-full bg-green/90 px-3 py-1 text-xs font-semibold text-navy-deep">
                  {project.category}
                </span>
                <h3 className="mt-3 flex items-start justify-between gap-2 text-xl font-semibold text-white">
                  {project.name}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-green opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-green" aria-hidden="true" />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
