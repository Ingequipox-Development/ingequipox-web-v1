"use client"

import { useState } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import type { Service } from "../data/services-data"

interface ServiceBlockProps {
    service: Service
    index: number
}

export function ServiceBlock({ service, index }: ServiceBlockProps) {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const isImageLeft = index % 2 === 0

    // Funciones para el carrusel de imágenes
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImgIndex((prev) => (prev + 1) % service.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImgIndex((prev) => (prev === 0 ? service.images.length - 1 : prev - 1))
    }

    return (
        <div key={service.id} className="group grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Bloque de Imagen */}
            <div
                className={`relative w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
                    }`}
            >
                <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden relative">
                    <img
                        key={`${service.id}-${currentImgIndex}`}
                        src={service.images[currentImgIndex] || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-500 animate-fade-in"
                    />
                    {/* Botones de navegación del carrusel */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg text-[#183563] transition-all hover:scale-110"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg text-[#183563] transition-all hover:scale-110"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={20} />
                    </button>
                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {service.images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImgIndex(idx)}
                                className={`h-2 rounded-full transition-all ${idx === currentImgIndex
                                    ? "w-8 bg-[#183563]"
                                    : "w-2 bg-white/80 hover:bg-white"
                                    }`}
                                aria-label={`Ir a la imagen ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* Overlay decorativo sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#183563]/10 to-transparent pointer-events-none" />
            </div>

            {/* Bloque de Texto */}
            <div
                className={`flex flex-col justify-center ${isImageLeft ? "order-2 lg:order-2 lg:pl-10" : "order-2 lg:order-1 lg:pr-10"
                    }`}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a6ce3a] shadow-sm">
                        <span className="text-lg font-bold text-[#183563]">{service.id}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#183563]">
                        {service.title}
                    </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                </p>

                <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                            {/* Usamos el verde intermedio (#8bd248) para el check */}
                            <CheckCircle2 className="h-6 w-6 shrink-0 text-[#8bd248]" strokeWidth={2} />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Botón de Cotización Directa (Opcional, pero recomendado en ventas B2B) */}
                <div className="mt-10">
                    <a
                        href="#contacto"
                        className="inline-flex font-semibold text-[#183563] border-b-2 border-[#a6ce3a] pb-1 transition-colors hover:text-[#a6ce3a]"
                    >
                        Cotizar este servicio &rarr;
                    </a>
                </div>
            </div>

        </div>
    )
}