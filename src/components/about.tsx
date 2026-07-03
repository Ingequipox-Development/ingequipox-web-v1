import { Target, Eye, ShieldCheck, CheckCircle2 } from "lucide-react"

export function AboutUs() {
    return (
        <section id="quienes-somos" className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Parte Superior: Descripción y Fotografía (Se mantiene igual) */}
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-xl font-bold uppercase tracking-wider text-green-dark">
                            Quiénes Somos
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#183563] sm:text-4xl">
                            Ingeniería con propósito ambiental
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            Somos una empresa comprometida con el desarrollo sostenible y la
                            preservación del medio ambiente, dedicada a la planificación y
                            ejecución de proyectos que garantizan soluciones personalizadas y
                            eficientes.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-[#183563]/5 transform rotate-2" />
                        <img
                            src={`${import.meta.env.BASE_URL}equipo.jpeg`}
                            alt="Equipo de profesionales de Ingequipox"
                            className="relative rounded-3xl object-cover shadow-xl border border-gray-100"
                        />
                    </div>
                </div>

                {/* Parte Inferior: Nueva estructura Misión, Visión y Valores */}
                <div className="mt-16 flex flex-col gap-8">

                    {/* Fila Superior: Misión y Visión (2 columnas) */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Tarjeta Misión */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:shadow-lg hover:border-[#a6ce3a]/30">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183563]">
                                    <Target className="h-6 w-6 text-[#a6ce3a]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#183563]">Misión</h3>
                            </div>
                            <p className="leading-relaxed text-gray-600">
                                Proteger la vida y el medio ambiente mediante soluciones integrales
                                de infraestructura e ingeniería enfocadas a un planeta sustentable.
                            </p>
                        </div>

                        {/* Tarjeta Visión */}
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:shadow-lg hover:border-[#a6ce3a]/30">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#183563]">
                                    <Eye className="h-6 w-6 text-[#a6ce3a]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#183563]">Visión</h3>
                            </div>
                            <p className="leading-relaxed text-gray-600">
                                Ser reconocidos como una empresa de gran calidad humana con sus
                                clientes y colaboradores, mediante procesos definidos y
                                estructurados, para proveer la mejor experiencia y satisfacción de
                                nuestros clientes.
                            </p>
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
                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a6ce3a] mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-[#183563]">Compromiso</h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                        Con los clientes, el planeta y los proyectos. Cumpliendo con
                                        alcance, tiempo, presupuesto y calidad.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a6ce3a] mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-[#183563]">Calidad</h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                        Prestando servicios que cumplan y superen las expectativas de nuestros clientes en cada entrega.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#a6ce3a] mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-[#183563]">Diligencia</h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                        Hacer las cosas con esmero, rapidez, eficacia y eficiencia en todos nuestros procesos operativos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}