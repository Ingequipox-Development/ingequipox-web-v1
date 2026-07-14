"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

// Modificamos 'href' por 'to' y agregamos la '/' para que funcione desde cualquier página
const links = [
  { label: "Experiencia", to: "/#experiencia" },
  { label: "Servicios", to: "/#servicios" },
  { label: "Proyectos", to: "/#proyectos" },
  { label: "Quienes Somos", to: "/#quienes-somos" },
  { label: "Contacto", to: "/#contacto" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep/90 backdrop-blur-sm shadow-md transition-transform duration-300 ease-in-out
        ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* El logo ahora redirige a la raíz usando Link */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo-white.png`}
            alt="Logo Ingequipox"
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/90 transition-colors hover:text-green"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-navy-deep transition-colors hover:bg-green-dark"
          >
            Cotizar proyecto
          </Link>
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

      {/* Menú Móvil */}
      {open && (
        <div className="mx-4 mb-4 rounded-2xl bg-navy p-4 border border-white/10 md:hidden shadow-lg">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-green px-3 py-2 text-center text-sm font-semibold text-[#183563]"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}