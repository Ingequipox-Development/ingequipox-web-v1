import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src={`${import.meta.env.BASE_URL}hero-water.png`}
        alt="Planta de tratamiento de agua vista desde el aire"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Superposición con gradiente azul marino */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, var(--navy-deep) 0%, color-mix(in oklch, var(--navy-deep), transparent 15%) 45%, color-mix(in oklch, var(--navy), transparent 45%) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-40 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-green/40 bg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green">
            Ingeniería ambiental
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Soluciones de Ingeniería para el Cuidado del Agua
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
            Diseñamos, construimos y operamos infraestructura hídrica sostenible
            que protege el recurso más valioso: el agua. Tecnología aplicada a la
            ingeniería industrial con compromiso ambiental.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-base font-semibold text-navy-deep shadow-lg shadow-green/20 transition-all hover:bg-green-dark hover:shadow-green/30"
            >
              Iniciar un proyecto
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
