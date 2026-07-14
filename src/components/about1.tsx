"use client"

import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { aboutImages, companyPhilosophy } from "../data/about-data"

export function AboutUs1() {
    return (
        <section id="quienes-somos" className="bg-white py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* PARTE SUPERIOR */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
                    <div>
                        <span className="text-xl font-bold uppercase tracking-wider text-green">
                            Quiénes Somos
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#183563] sm:text-4xl">
                            {companyPhilosophy.title}
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            {companyPhilosophy.description}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-[#183563]/5 transform rotate-2" />
                        <img
                            src={aboutImages.mainGroupPhoto}
                            alt="Equipo de profesionales de Ingequipox"
                            className="relative rounded-3xl object-cover shadow-xl border border-gray-100"
                        />
                    </div>
                </div>
                {/* Fila Inferior: Valores (Ancho completo) */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:shadow-lg hover:border-[#a6ce3a]/30">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183563]">
                            <ShieldCheck className="h-6 w-6 text-[#a6ce3a]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#183563]">Nuestros Valores</h3>
                    </div>

                    {/* Grilla interna para alinear los 3 valores horizontalmente en pantallas grandes */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {companyPhilosophy.values.map((value) => (
                            <div key={value.id} className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a6ce3a] mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-[#183563]">{value.title}</h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTÓN CALL TO ACTION */}
                <div className="mt-16 text-center">
                    <Link
                        to="/quienes-somos"
                        className="inline-flex items-center gap-2 rounded-full bg-[#183563] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#a6ce3a] hover:text-[#183563] shadow-lg hover:shadow-xl"
                    >
                        Conoce más sobre nuestra filosofía y equipo
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}