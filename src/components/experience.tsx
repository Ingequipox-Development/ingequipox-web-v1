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
    title: "Ingeniería",
    text: "Diseño y consultoría especializada en sistemas de tratamiento, redes hidráulicas y estudios ambientales, con enfoque en eficiencia y cumplimiento normativo.",
  },
  {
    icon: Factory,
    title: "Operación de Plantas",
    text: "Puesta en marcha, operación y mantenimiento de plantas de tratamiento de agua potable y residual, garantizando la calidad del recurso hídrico.",
  },
  {
    icon: Gauge,
    title: "Estaciones de Bombeo",
    text: "Construcción y automatización de estaciones de bombeo de alta eficiencia energética, diseñadas para una operación confiable y continua.",
  },
  {
    icon: Waves,
    title: "Acueductos",
    text: "Desarrollo integral de acueductos y redes de conducción que llevan agua segura a comunidades y ciudades de forma sostenible.",
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experiencia" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Columna izquierda: texto */}
        <div className="lg:pt-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-dark">
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
              <div className="text-3xl font-semibold text-navy">98%</div>
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
                className={`rounded-2xl border transition-colors ${
                  isOpen
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
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isOpen ? "bg-green text-navy-deep" : "bg-navy/5 text-navy"
                    }`}
                  >
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`flex-1 text-lg font-semibold ${
                      isOpen ? "text-white" : "text-navy"
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
                  className={`grid transition-all duration-300 ${
                    isOpen
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
