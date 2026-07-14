"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { TrendingUp, ShieldCheck, Globe, ArrowRight } from "lucide-react"

// Datos muy resumidos de los grandes hitos para el bloque derecho
const miniTimeline = [
    {
        year: "2020",
        title: "Consolidación en Lixiviados",
        desc: "Diseño y construcción de PTLs críticas a nivel nacional.",
        icon: TrendingUp,
    },
    {
        year: "2022",
        title: "Diversificación Industrial",
        desc: "Tratamiento de agua potable (PTAP) y bombeo de alta capacidad.",
        icon: ShieldCheck,
    },
    {
        year: "2024 - 2026",
        title: "Operación de Gran Escala",
        desc: "Gestión simultánea e ininterrumpida de más de 8 plantas del país.",
        icon: Globe,
    }
]

export function Experience() {
    return (
        <section id="experiencia" className="bg-white py-16 lg:py-32 lg:pb-20">
            <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">

                {/* Columna izquierda: texto */}
                <div className="lg:pt-6">
                    <span className="text-xl font-bold uppercase tracking-wider text-green-dark">
                        Nuestra experiencia
                    </span>
                    <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#183563] sm:text-4xl">
                        Comprometidos con el medio ambiente y el futuro del agua
                    </h2>
                    <p className="mt-6 text-pretty text-base leading-relaxed text-gray-600">
                        En Ingequipox integramos ingeniería de precisión con una profunda
                        responsabilidad ambiental. Cada proyecto que ejecutamos busca reducir
                        el impacto ecológico, optimizar el uso de los recursos y devolver agua
                        de calidad a los ecosistemas y comunidades.
                    </p>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-gray-600">
                        Nuestro equipo multidisciplinario combina tecnología de vanguardia con
                        décadas de experiencia operativa para entregar soluciones duraderas.
                    </p>

                    {/* Bloque de estadísticas adaptado a la paleta premium */}
                    <div className="mt-10 flex items-center gap-8 border-t border-gray-100 pt-8">
                        <div>
                            <div className="text-4xl font-bold tracking-tight text-[#183563]">100%</div>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                Satisfacción de clientes
                            </p>
                        </div>
                        <div className="h-12 w-px bg-gray-200" />
                        <div>
                            <div className="text-4xl font-bold tracking-tight text-[#183563]">24/7</div>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                Monitoreo de operación
                            </p>
                        </div>
                    </div>
                </div>

                {/* Columna derecha: Mini-Trayectoria Compacta */}
                <div className="lg:ml-4 bg-slate-50/80 rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-bold text-[#183563] mb-8">
                        Evolución en el Mercado
                    </h3>

                    <div className="relative pl-6">
                        {/* Línea conectora vertical */}
                        <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#a6ce3a]/30" />

                        {miniTimeline.map((item, index) => (
                            <div key={index} className="relative mb-8 last:mb-0 pl-6 group">
                                {/* Puntito / Icono indicador sobre la línea */}
                                <div className="absolute left-[-1.90rem] top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white border-2 border-[#a6ce3a] shadow-sm transition-colors duration-300 group-hover:bg-[#a6ce3a]">
                                    <item.icon className="h-6 w-6 text-[#183563] transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                                </div>

                                {/* Textos del Hito */}
                                <div>
                                    <span className="inline-block text-xs font-bold text-[#a6ce3a]">
                                        {item.year}
                                    </span>
                                    <h4 className="text-base font-bold text-[#183563] mt-0.5">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enlace sutil apuntando a la nueva ruta */}
                    {/* Botón Call to Action intacto */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/trayectoria"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center gap-2 rounded-full bg-[#183563] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#a6ce3a] hover:text-[#183563] shadow-lg hover:shadow-xl"
                        >
                            Ver toda nuestra trayectoria
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}