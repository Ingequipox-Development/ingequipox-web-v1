"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { servicesData } from "../data/services-data"

export function Services() {
    const [activeTab, setActiveTab] = useState(0)
    const [currentImgIndex, setCurrentImgIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const currentService = servicesData[activeTab]

    // Resetea la imagen a la primera cuando se cambia de pestaña
    useEffect(() => {
        setCurrentImgIndex(0)
    }, [activeTab])

    // Lógica de Auto-play (Cambia cada 8 segundos si no tiene el mouse encima)
    useEffect(() => {
        if (isHovered) return

        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % servicesData.length)
        }, 8000)

        return () => clearInterval(timer)
    }, [isHovered])

    // Funciones para el carrusel de imágenes
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImgIndex((prev) => (prev + 1) % currentService.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImgIndex((prev) => (prev === 0 ? currentService.images.length - 1 : prev - 1))
    }

    return (
        <section id="servicios" className="bg-navy-deep py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Cabecera Adaptada al Fondo Oscuro */}
                <div className="text-center mb-16">
                    <span className="text-xl font-bold uppercase tracking-wider text-green">
                        Nuestras Soluciones
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ingeniería que impulsa tu operación
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#a6ce3a]" />
                </div>

                {/* Contenedor Principal (Pestañas + Tarjeta) con pausa en Hover */}
                <div
                    className="max-w-6xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Selector de Pestañas Unidas a la tarjeta */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon
                            const isActive = activeTab === index

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center justify-center gap-3 w-full px-6 py-4 rounded-t-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                                        ? "bg-white text-[#183563] shadow-md z-10" // Activa: Blanca, unida a la tarjeta
                                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white" // Inactiva: Translúcida
                                        }`}
                                >
                                    <Icon className={`h-5 w-5 ${isActive ? "text-[#a6ce3a]" : "opacity-70"}`} />
                                    {service.tabLabel}
                                </button>
                            )
                        })}
                    </div>

                    {/* Tarjeta de Contenido */}
                    <div className="bg-white rounded-3xl rounded-t-none sm:rounded-t-3xl sm:rounded-tl-none p-8 lg:p-12 shadow-2xl relative z-0">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                            {/* Lado Izquierdo: Textos e Ítems */}
                            <div className="animate-fade-in">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm font-bold text-[#a6ce3a] bg-[#183563]/5 px-3 py-1 rounded-full">
                                        Nuestros Servicios
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-[#183563] mb-4">
                                    {currentService.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {currentService.description}
                                </p>

                                <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:space-y-0">
                                    {currentService.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8bd248] mt-0.5" strokeWidth={2} />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 pt-6 border-t border-gray-100">
                                    <a
                                        href="#contacto"
                                        className="inline-flex items-center gap-2 rounded-full bg-[#a6ce3a] px-6 py-3 text-sm font-semibold text-[#183563] transition-colors hover:bg-[#8bd248]"
                                    >
                                        Solicitar consultoría técnica
                                    </a>
                                </div>
                            </div>

                            {/* Lado Derecho: Carrusel de Imágenes */}
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 group">
                                <img
                                    key={`${currentService.id}-${currentImgIndex}`}
                                    src={currentService.images[currentImgIndex] || "/placeholder.svg"}
                                    alt={currentService.title}
                                    className="w-full h-full object-cover transition-all duration-500 animate-fade-in"
                                />

                                {/* Controles del Carrusel (Solo se muestran si hay más de 1 imagen) */}
                                {currentService.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all hover:bg-[#a6ce3a] hover:text-[#183563] group-hover:opacity-100"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-all hover:bg-[#a6ce3a] hover:text-[#183563] group-hover:opacity-100"
                                        >
                                            <ChevronRight className="h-6 w-6" />
                                        </button>

                                        {/* Indicadores de posición (Puntitos abajo) */}
                                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                            {currentService.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-2 rounded-full transition-all ${idx === currentImgIndex ? "w-6 bg-[#a6ce3a]" : "w-2 bg-white/60"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}