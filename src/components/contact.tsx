"use client"

import type React from "react"
import { useState } from "react"
import { Check } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-green-dark">
            Hablemos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Cuéntanos sobre tu proyecto
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Estamos listos para diseñar la solución de ingeniería del agua que tu
            organización necesita. Escríbenos y un especialista te contactará.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-navy">Correo</dt>
              <dd className="text-muted-foreground">
                direcciondeproyectos@ingequipox.com.co
              </dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Celular</dt>
              <dd className="text-muted-foreground">305 430 14 24</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Ubicación</dt>
              <dd className="text-muted-foreground">Manizales, Colombia</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl bg-card p-8 shadow-xl shadow-navy/5 lg:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-navy-deep">
                <Check className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gracias por escribirnos. Te contactaremos muy pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <FloatingField id="nombre" label="Nombre completo" type="text" />
              <FloatingField id="email" label="Correo electrónico" type="email" />
              <FloatingField id="telefono" label="Teléfono" type="tel" />
              <div className="relative">
                <textarea
                  id="mensaje"
                  rows={3}
                  required
                  placeholder=" "
                  className="peer w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-navy outline-none transition-colors focus:border-green"
                />
                <label
                  htmlFor="mensaje"
                  className="pointer-events-none absolute left-0 top-1 text-muted-foreground transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-dark peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Cuéntanos sobre tu proyecto
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-navy px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FloatingField({
  id,
  label,
  type,
}: {
  id: string
  label: string
  type: string
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required
        placeholder=" "
        className="peer w-full border-0 border-b border-border bg-transparent pb-2 pt-1 text-navy outline-none transition-colors focus:border-green"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-1 text-muted-foreground transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-green-dark peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}
