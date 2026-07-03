"use client"

import { useState } from "react"
import {
  Plus,
  Minus,
  PencilRuler,
  Factory,
  Gauge,
  Waves,
} from "lucide-react"

const services = [
  {
    icon: PencilRuler,
    title: "Operación y mantenimiento de plantas",
    text: "Contamos con personal calificado para realizar programas de mantenimiento con el fin de prever y corregir problemas en la operación de las plantas de tratamiento.",
  },
  {
    icon: Factory,
    title: "Modernización y ampliación de plantas",
    text: "Servicio de optimización y ampliación de cada uno de los procesos que integran una planta de tratamiento de agua.",
  },
  {
    icon: Gauge,
    title: "Tratamiento de aguas",
    text: "Tratamiento de agua potable, residual, industrial y agua para sistemas de enfriamiento y generación de vapor.",
  },
  {
    icon: Waves,
    title: "Ingeniería y construcción",
    text: "Diseño e ingeniería de detalle de sistemas para tratamiento de aguas. Construcción de obras civiles, eléctricas y mecánicas.",
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experiencia" className="bg-background py-16 lg:py-32 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Columna izquierda: texto */}
        <div className="lg:pt-6">
          <span className="text-xl font-semibold uppercase tracking-wider text-green-dark">
            Nuestra experiencia
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Comprometidos con el medio ambiente y el futuro del agua
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            En Ingequipox integramos ingeniería de precisión con una profunda
            responsabilidad ambiental. Cada proyecto que ejecutamos busca reducir
            el impacto ecológico, optimizar el uso de los recursos y devolver agua
            de calidad a los ecosistemas y comunidades.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Nuestro equipo multidisciplinario combina tecnología de vanguardia con
            décadas de experiencia operativa para entregar soluciones duraderas.
          </p>

          <div className="mt-8 flex items-center gap-6 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-semibold text-navy">100%</div>
              <p className="text-sm text-muted-foreground">
                Satisfacción de clientes
              </p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-semibold text-navy">24/7</div>
              <p className="text-sm text-muted-foreground">
                Monitoreo de operación
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: acordeón de servicios */}
        <div className="flex flex-col gap-3">
          {services.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={service.title}
                className={`rounded-2xl border transition-colors ${isOpen
                  ? "border-navy/15 bg-navy text-white"
                  : "border-border bg-card"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center gap-4 p-5 text-left lg:p-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isOpen ? "bg-green text-navy-deep" : "bg-navy/5 text-navy"
                      }`}
                  >
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`flex-1 text-lg font-semibold ${isOpen ? "text-white" : "text-navy"
                      }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={
                      isOpen ? "text-green" : "text-muted-foreground"
                    }
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pl-20 text-sm leading-relaxed text-white/70 lg:px-6 lg:pl-[5.5rem]">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
