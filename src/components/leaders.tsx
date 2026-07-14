"use client"

import { Briefcase, Mail } from "lucide-react"
import { leadershipTeam } from "../data/about-data" // Importamos los datos centralizados

export function LeadershipSection() {
    return (
        <section id="liderazgo" className="bg-navy py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Cabecera de la sección */}
                <div className="text-center mb-16">
                    <span className="text-xl font-bold uppercase tracking-wider text-green">
                        Nuestro Equipo
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Liderazgo que impulsa la excelencia
                    </h2>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Los profesionales detrás de nuestra operación. Un equipo directivo comprometido con la innovación, la seguridad y la sostenibilidad.
                    </p>
                </div>

                {/* Cuadrícula de Tarjetas con Tema Oscuro */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {leadershipTeam.map((leader) => (
                        <div
                            key={leader.id}
                            className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-[#a6ce3a]/50 transition-all duration-300"
                        >
                            {/* Foto del perfil */}
                            <div className="aspect-[4/5] w-full overflow-hidden bg-[#0f2547] relative">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                {/* Gradiente oscuro para fusionar la foto con la tarjeta */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1b325f] to-transparent opacity-80" />
                            </div>

                            {/* Datos del perfil adaptados a modo oscuro */}
                            <div className="p-6 pt-4 flex flex-col flex-1 relative z-10">
                                <span className="text-sm font-bold text-[#a6ce3a] mb-1">
                                    {leader.role}
                                </span>
                                <h4 className="text-xl font-bold text-white mb-3">
                                    {leader.name}
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">
                                    {leader.description}
                                </p>

                                {/* Íconos de contacto */}
                                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/10">
                                    <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label={`Perfil profesional de ${leader.name}`}>
                                        <Briefcase className="h-4 w-4" />
                                    </a>
                                    <a href="#" className="text-white/40 hover:text-[#a6ce3a] transition-colors" aria-label={`Enviar correo a ${leader.name}`}>
                                        <Mail className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}