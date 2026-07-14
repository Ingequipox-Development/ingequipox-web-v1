"use client"

import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { servicesData } from "../data/services-data"
import { ServiceBlock } from "./service-block"

export function Services2() {

    return (
        <section id="servicios" className="bg-slate-50 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Cabecera intacta como lo solicitaste */}
                <div className="text-center mb-16">
                    <span className="text-xl font-bold uppercase tracking-wider text-green">
                        Nuestras Soluciones
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#183563] sm:text-4xl">
                        Ingeniería que impulsa tu operación
                    </h2>
                </div>

                {/* Cuadrícula Responsive: 1 col (móvil), 2 cols (tablet), 4 cols (escritorio) */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#a6ce3a]/50"
                        >
                            {/* Mitad Superior: Fotografía con Zoom Suave */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                <img
                                    src={service.images[0]}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                {/* Overlay oscuro sutil para que la imagen no se vea "lavada" */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                            </div>

                            {/* Ícono Flotante (Se superpone entre la imagen y el texto) */}
                            <div className="absolute right-6 top-36 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a6ce3a] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                                <service.icon className="h-6 w-6 text-[#183563]" strokeWidth={2} />
                            </div>

                            {/* Mitad Inferior: Textos descriptivos */}
                            <div className="flex flex-1 flex-col p-6 pt-8">
                                <h3 className="mb-3 text-xl font-bold text-[#183563] leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón Call to Action intacto */}
                <div className="mt-16 text-center">
                    <Link
                        to="/servicios"
                        className="inline-flex items-center gap-2 rounded-full bg-[#183563] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#a6ce3a] hover:text-[#183563] shadow-lg hover:shadow-xl"
                    >
                        Ver todos los servicios en detalle
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}