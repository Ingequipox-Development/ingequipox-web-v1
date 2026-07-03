import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              {/* Logo insertado con la misma lógica de rutas de Vite */}
              <img
                src={`${import.meta.env.BASE_URL}logo-white.png`}
                alt="Logo Ingequipox"
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Firma de ingeniería ambiental especializada en soluciones
              sostenibles para el cuidado y la gestión del agua.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Operación y mantenimiento de plantas</li>
              <li>Modernización y ampliación de plantas</li>
              <li>Tratamiento de aguas</li>
              <li>Ingeniería y construcción</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                <a
                  href="mailto:direcciondeproyectos@ingequipox.com.co"
                  className="transition-colors hover:text-green"
                >
                  direcciondeproyectos@ingequipox.com.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                <a
                  href="tel:+573054301424"
                  className="transition-colors hover:text-green"
                >
                  305 430 14 24
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                Manizales, Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Ingequipox SAS ESP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}