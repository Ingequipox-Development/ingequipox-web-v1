"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Quienes Somos", href: "#quienes-somos" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // 1. Si hace scroll hacia abajo y pasó los 100px de altura, esconde la barra
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      }
      // 2. Si hace scroll hacia arriba, muestra la barra inmediatamente
      else if (currentScrollY < lastScrollY) {
        setIsHidden(false)
      }

      // Guardar la posición actual para la siguiente comparación
      setLastScrollY(currentScrollY)
    }

    // Escuchar el evento de scroll del navegador
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep/90 backdrop-blur-sm shadow-md transition-transform duration-300 ease-in-out
        ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo-white.png`}
            alt="Logo Ingequipox"
            className="h-14 md:h-16 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-green-dark"
          >
            Cotizar proyecto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl bg-navy p-4 border border-white/10 md:hidden shadow-lg">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-green px-3 py-2 text-center text-sm font-semibold text-[#183563]"
            >
              Cotizar proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}