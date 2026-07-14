"use client"

import { servicesData } from "../data/services-data"
import { ServiceBlock } from "./service-block"

export function Services1({ showHeader = true }: { showHeader?: boolean }) {
    return (
        <section id="servicios" className="bg-white py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Cabecera de la sección */}
                {showHeader && (
                    <div className="text-center mb-20 md:mb-32">
                        <span className="text-xl font-bold uppercase tracking-wider text-green-dark">
                            Nuestros Servicios
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                            Ingeniería que impulsa tu operación
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#a6ce3a]" />
                    </div>
                )}

                {/* Contenedor Zig-Zag */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {servicesData.map((service, index) => (
                        <ServiceBlock key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}