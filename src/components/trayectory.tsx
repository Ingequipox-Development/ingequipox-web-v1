"use client"

import { trajectoryData } from "../data/trayectory-data";

export function Trajectory() {
    return (
        <section id="trayectoria" className="bg-slate-50 py-10 lg:py-18 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Contenedor de la Línea de Tiempo en Grid */}
                <div className="relative mx-auto max-w-6xl">

                    {/* Línea vertical central (Escritorio) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#a6ce3a]/40 transform -translate-x-1/2" />

                    {/* Línea vertical izquierda (Móvil) */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-[#a6ce3a]/40" />

                    {/* Cuadrícula de 2 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-12 md:gap-x-24">
                        {trajectoryData.map((item, index) => {
                            const isEven = index % 2 === 0

                            return (
                                <div key={index} className="relative ml-16 md:ml-0">

                                    {/* --- CONTROLES MÓVILES --- */}
                                    <div className="md:hidden absolute top-1/2 left-[-2.5rem] w-[2.5rem] h-px bg-[#a6ce3a]/50 transform -translate-y-1/2" />
                                    <div className="md:hidden absolute top-1/2 left-[-2.5rem] w-5 h-5 rounded-full bg-[#a6ce3a] border-4 border-slate-50 shadow-sm transform -translate-y-1/2 -translate-x-1/2 z-10" />

                                    {/* --- CONTROLES ESCRITORIO --- */}
                                    <div className={`hidden md:block absolute top-1/2 w-[3rem] h-px bg-[#a6ce3a]/50 transform -translate-y-1/2 ${isEven ? "right-[-3rem]" : "left-[-3rem]"}`} />

                                    {isEven && (
                                        <div className="hidden md:block absolute top-1/2 right-[-3rem] w-5 h-5 rounded-full bg-[#a6ce3a] border-4 border-slate-50 shadow-sm transform -translate-y-1/2 translate-x-1/2 z-10" />
                                    )}

                                    {/* Tarjeta de Contenido */}
                                    <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#a6ce3a]/30 hover:-translate-y-1 flex flex-col h-full">

                                        {/* --- PARTE SUPERIOR: Icono y Textos --- */}
                                        <div className="flex flex-col xl:flex-row gap-5 flex-1">
                                            {/* Icono (w-14) */}
                                            <div className="shrink-0">
                                                <div className="w-14 h-14 rounded-xl bg-[#183563]/5 flex items-center justify-center transition-colors group-hover:bg-[#a6ce3a]/10">
                                                    <item.icon className="w-7 h-7 text-[#183563]" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Textos */}
                                            <div>
                                                <h3 className="text-xl font-bold text-[#183563]">
                                                    {item.title}
                                                </h3>
                                                <span className="mt-1 mb-3 block text-sm font-bold text-[#a6ce3a]">
                                                    {item.year}
                                                </span>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* --- PARTE INFERIOR: Lista de items (Si existen) --- */}
                                        {item.items && item.items.length > 0 && (
                                            <div className="mt-6 pt-5 border-t border-gray-100">
                                                {/* xl:ml-[4.75rem] empuja la lista exactamente el ancho del icono + el gap */}
                                                <ul className="space-y-3 xl:ml-[2.75rem]">
                                                    {item.items.map((subItem, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                                            <div className="shrink-0 mt-0.5">
                                                                {subItem.icon ? (
                                                                    <subItem.icon className="w-5 h-5 text-[#a6ce3a]" strokeWidth={2} />
                                                                ) : (
                                                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#a6ce3a]" />
                                                                )}
                                                            </div>
                                                            <span className="flex-1">{subItem.title}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}