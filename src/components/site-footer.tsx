import { Mail, Phone, MapPin, FileText } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Columna 1: Logo, Descripción y Documento */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
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

            {/* Nuevo diseño de Documento de Consulta (Adaptado al tema oscuro) */}
            <div className="mt-8 max-w-sm">
              <a
                href={`${import.meta.env.BASE_URL}docs/SGI-PLT-012-politica_de_seguridad_de_la_informacion_y_gestion_de_incidentes_de_seguridad.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-green/50 hover:bg-white/10"
              >
                {/* Ícono simulando el PDF */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black/20 text-green shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Textos del documento */}
                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    Documento de consulta
                  </span>
                  <span className="mt-0.5 text-sm text-green transition-colors group-hover:text-[#8bd248]">
                    Política de seguridad de la información
                  </span>
                </div>
              </a>
            </div>
            {/* Nuevo diseño de Documento de Consulta (Adaptado al tema oscuro) */}
            <div className="mt-8 max-w-sm">
              <a
                href={`${import.meta.env.BASE_URL}docs/SGI-PLT-013-politica_de_tratamiento_de_datos_personales.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-green/50 hover:bg-white/10"
              >
                {/* Ícono simulando el PDF */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black/20 text-green shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <FileText className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Textos del documento */}
                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    Documento de consulta
                  </span>
                  <span className="mt-0.5 text-sm text-green transition-colors group-hover:text-[#8bd248]">
                    Política de tratamiento de datos personales
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Operación y mantenimiento de plantas</li>
              <li>Modernización y ampliación de plantas</li>
              <li>Tratamiento de aguas</li>
              <li>Ingeniería y construcción</li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
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
                  +57 305 430 14 24
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                Manizales, Colombia
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
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