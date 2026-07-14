"use client"

import { trajectoryData } from "../data/trayectory-data";

export function Trajectory() {
    return (
        <section id="trayectoria" className="bg-slate-50 py-10 lg:py-18 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Cabecera de la sección 
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-xl font-bold uppercase tracking-wider text-green-dark">
                        Nuestra Trayectoria
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                        Trayectoria que construye confianza
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Evolución y alcance nacional marcados por hitos de excelencia en ingeniería e infraestructura.
                    </p>
                </div>
                */}
                {/* Contenedor de la Línea de Tiempo en Grid */}
                <div className="relative mx-auto max-w-6xl">

                    {/* Línea vertical central (Escritorio) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#a6ce3a]/40 transform -translate-x-1/2" />

                    {/* Línea vertical izquierda (Móvil) */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-[#a6ce3a]/40" />

                    {/* Cuadrícula de 2 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-12 md:gap-x-24">
                        {trajectoryData.map((item, index) => {
                            const isEven = index % 2 === 0 // isEven = Columna Izquierda, !isEven = Columna Derecha

                            return (
                                <div key={index} className="relative ml-16 md:ml-0">

                                    {/* --- CONTROLES MÓVILES --- */}
                                    <div className="md:hidden absolute top-1/2 left-[-2.5rem] w-[2.5rem] h-px bg-[#a6ce3a]/50 transform -translate-y-1/2" />
                                    <div className="md:hidden absolute top-1/2 left-[-2.5rem] w-5 h-5 rounded-full bg-[#a6ce3a] border-4 border-slate-50 shadow-sm transform -translate-y-1/2 -translate-x-1/2 z-10" />

                                    {/* --- CONTROLES ESCRITORIO --- */}
                                    {/* Conector horizontal dinámico (apunta al centro) */}
                                    <div className={`hidden md:block absolute top-1/2 w-[3rem] h-px bg-[#a6ce3a]/50 transform -translate-y-1/2 ${isEven ? "right-[-3rem]" : "left-[-3rem]"
                                        }`} />

                                    {/* Nodo Central (Solo lo renderizamos en la tarjeta izquierda para que no se dupliquen visualmente en el centro) */}
                                    {isEven && (
                                        <div className="hidden md:block absolute top-1/2 right-[-3rem] w-5 h-5 rounded-full bg-[#a6ce3a] border-4 border-slate-50 shadow-sm transform -translate-y-1/2 translate-x-1/2 z-10" />
                                    )}

                                    {/* Tarjeta de Contenido (h-full asegura que se emparejen en altura) */}
                                    <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#a6ce3a]/30 hover:-translate-y-1 flex flex-col xl:flex-row gap-5 h-full">

                                        {/* Icono */}
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
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}