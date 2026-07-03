"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#091b31]/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          {/* Aquí inyectamos el nuevo logo, usando BASE_URL para GitHub Pages */}
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
              className="text-sm font-medium text-white/80 transition-colors hover:text-green"
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
        <div className="mx-4 rounded-2xl bg-navy p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-green px-3 py-2 text-center text-sm font-semibold text-navy-deep"
            >
              Cotizar proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}