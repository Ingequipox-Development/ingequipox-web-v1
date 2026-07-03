"use client"

import { useState } from "react"
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowRight, Grid3X3 } from "lucide-react"

const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "PTAR Yotoco",
    location: "Valle del Cauca",
    category: "Planta de tratamiento",
    images: [`${base}project-yotoco.png`],
    shortDesc: "Diseño, construcción y optimización de la Planta de Tratamiento de Aguas Residuales.",
    detail: "Este proyecto optimiza la remoción de carga contaminante en el municipio mediante reactores avanzados y sistemas de aireación de alta eficiencia, asegurando el cumplimiento estricto de las normativas ambientales colombianas."
  },
  {
    name: "Estación de Bombeo Santa Marta",
    location: "Magdalena",
    category: "Estaciones de bombeo",
    images: [`${base}project-santamarta.png`],
    shortDesc: "Modernización del sistema hidráulico principal para la gestión de aguas lluvias.",
    detail: "Implementación de equipos de bombeo de alta capacidad con sistemas de automatización inteligente integrados, mitigando eficazmente inundaciones y mejorando la resiliencia de la infraestructura urbana."
  },
  {
    name: "Aeropuerto El Dorado",
    location: "Bogotá D.C.",
    category: "Gestión hídrica",
    images: [`${base}project-eldorado.png`],
    shortDesc: "Consultoría estratégica para el uso eficiente y circular del recurso hídrico.",
    detail: "Desarrollo e ingeniería aplicable para la gestión y monitoreo del agua en operaciones a gran escala, reduciendo drásticamente el impacto ambiental y el desperdicio en terminales de alta demanda."
  },
]

export function Projects() {
  // Estado para el modal de un proyecto individual
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  // NUEVO: Estado para el modal del portafolio completo
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImgIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="proyectos" className="bg-navy-deep py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xl font-semibold uppercase tracking-wider text-green">
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
              onClick={() => openModal(project)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all hover:shadow-xl hover:shadow-green/5 ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <img
                src={project.images[0] || "/placeholder.svg"}
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
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-green opacity-0 transition-all duration-300 transform group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-green" aria-hidden="true" />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* BOTÓN ACTUALIZADO: Ahora ejecuta setIsPortfolioOpen(true) al hacer clic */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setIsPortfolioOpen(true)}
            className="group flex items-center gap-2 rounded-full border border-green px-6 py-3 text-sm font-semibold text-green transition-all duration-300 hover:bg-[#72d456] hover:text-navy-deep hover:border-[#72d456]"
          >
            Ver portafolio completo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* MODAL 1: Proyecto Individual (Se mantiene igual) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-deep/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Contenedor del modal */}
          <div
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-navy shadow-2xl md:flex-row border border-green/30 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-green hover:text-navy-deep"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Sección imagen */}
            <div className="relative h-64 w-full md:h-auto md:w-1/2 bg-black/20">
              <img
                src={selectedProject.images[currentImgIndex]}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1) }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-green hover:text-navy-deep transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1) }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-green hover:text-navy-deep transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {/* Sección texto */}
            <div className="flex w-full flex-col justify-center p-8 md:w-1/2 overflow-y-auto">
              <span className="w-fit rounded-full bg-green/90 px-3 py-1 text-xs font-bold text-navy-deep mb-4">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold text-white">{selectedProject.name}</h3>
              <div className="mt-2 flex items-center gap-1.5 text-white/70">
                <MapPin className="h-5 w-5 text-green" />
                <span className="text-lg">{selectedProject.location}</span>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-lg font-medium text-white leading-snug">
                  {selectedProject.shortDesc}
                </p>
                <div className="h-px w-full bg-white/10" />
                <p className="text-white/70 leading-relaxed text-sm">
                  {selectedProject.detail}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contacto"
                  onClick={closeModal}
                  className="inline-block text-center rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-[#72d456]"
                >
                  Me interesa un proyecto similar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NUEVO MODAL 2: Galería de Portafolio Completo */}
      {isPortfolioOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-deep/95 backdrop-blur-sm"
          onClick={() => setIsPortfolioOpen(false)}
        >
          <div
            className="relative flex w-full max-w-6xl flex-col rounded-3xl bg-navy p-8 md:p-12 shadow-2xl border border-green/30 max-h-[90vh] overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPortfolioOpen(false)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green hover:text-navy-deep"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-10 text-center">
              <Grid3X3 className="mx-auto h-12 w-12 text-green mb-4" />
              <h2 className="text-3xl font-bold text-white md:text-4xl">Portafolio General</h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Explora el alcance completo de nuestras soluciones en infraestructura hídrica y ambiental a nivel nacional.
              </p>
            </div>

            {/* Cuadrícula interna del portafolio */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Aquí mapeamos los mismos proyectos como ejemplo, pero luego puedes crear un array nuevo llamado 'allProjects' con más fotos */}
              {projects.map((project, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-[#183563] border border-green/30 cursor-pointer transition-all hover:shadow-xl hover:shadow-green/5">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.name}
                    className="h-48 w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                    <p className="mt-1 text-sm text-white/70">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setIsPortfolioOpen(false)}
                className="rounded-full border border-white/20 px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Cerrar galería
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}