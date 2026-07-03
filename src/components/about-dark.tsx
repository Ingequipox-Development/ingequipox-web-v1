import { Target, Eye, ShieldCheck, CheckCircle2 } from "lucide-react"

export function AboutUs() {
    return (
        <section id="quienes-somos" className="bg-navy-deep py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Parte Superior: Descripción y Fotografía */}
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-xl font-bold uppercase tracking-wider text-green">
                            Quiénes Somos
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ingeniería con propósito ambiental
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-white/70">
                            Somos una empresa comprometida con el desarrollo sostenible y la
                            preservación del medio ambiente, dedicada a la planificación y
                            ejecución de proyectos que garantizan soluciones personalizadas y
                            eficientes.
                        </p>
                    </div>

                    <div className="relative">
                        {/* El elemento decorativo ahora usa un tono verde suave para contrastar */}
                        <div className="absolute -inset-4 rounded-3xl bg-green/10 transform rotate-2" />
                        <img
                            src={`${import.meta.env.BASE_URL}equipo.jpeg`}
                            alt="Equipo de profesionales de Ingequipox"
                            className="relative rounded-3xl object-cover shadow-xl border border-white/10"
                        />
                    </div>
                </div>
                {/* Parte Inferior: Diseño Editorial sin tarjetas */}
                <div className="mt-16 pt-16 border-t border-white/10">

                    {/* Fila Superior: Misión y Visión */}
                    <div className="grid gap-16 md:grid-cols-2">
                        {/* Misión - Diseño abierto */}
                        <div className="flex gap-6">
                            <Target className="h-10 w-10 shrink-0 text-green" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-2xl font-light tracking-wide text-white mb-4">Misión</h3>
                                <p className="leading-relaxed text-white/60">
                                    Proteger la vida y el medio ambiente mediante soluciones integrales
                                    de infraestructura e ingeniería enfocadas a un planeta sustentable.
                                </p>
                            </div>
                        </div>

                        {/* Visión - Diseño abierto */}
                        <div className="flex gap-6">
                            <Eye className="h-10 w-10 shrink-0 text-green" strokeWidth={1.5} />
                            <div>
                                <h3 className="text-2xl font-light tracking-wide text-white mb-4">Visión</h3>
                                <p className="leading-relaxed text-white/60">
                                    Ser reconocidos como una empresa de gran calidad humana con sus
                                    clientes y colaboradores, mediante procesos definidos y
                                    estructurados, para proveer la mejor experiencia y satisfacción de
                                    nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fila Inferior: Valores */}
                    <div className="mt-20 pt-16 border-t border-white/10">
                        <div className="flex items-center gap-4 mb-10">
                            <ShieldCheck className="h-8 w-8 text-green" strokeWidth={1.5} />
                            <h3 className="text-2xl font-light tracking-wide text-white">Nuestros Valores</h3>
                        </div>

                        {/* Grilla de valores separados por líneas sutiles en pantallas grandes */}
                        <div className="grid gap-10 md:grid-cols-3 md:gap-0">

                            {/* Valor 1 */}
                            <div className="md:pr-10">
                                <h4 className="flex items-center gap-2 font-semibold text-white">
                                    <CheckCircle2 className="h-4 w-4 text-green" />
                                    Compromiso
                                </h4>
                                <p className="mt-3 text-sm text-white/60 leading-relaxed pl-6">
                                    Con los clientes, el planeta y los proyectos. Cumpliendo con
                                    alcance, tiempo, presupuesto y calidad.
                                </p>
                            </div>

                            {/* Valor 2 (Con borde izquierdo) */}
                            <div className="md:border-l border-white/10 md:px-10">
                                <h4 className="flex items-center gap-2 font-semibold text-white">
                                    <CheckCircle2 className="h-4 w-4 text-green" />
                                    Calidad
                                </h4>
                                <p className="mt-3 text-sm text-white/60 leading-relaxed pl-6">
                                    Prestando servicios que cumplan y superen las expectativas de nuestros clientes en cada entrega.
                                </p>
                            </div>

                            {/* Valor 3 (Con borde izquierdo) */}
                            <div className="md:border-l border-white/10 md:pl-10">
                                <h4 className="flex items-center gap-2 font-semibold text-white">
                                    <CheckCircle2 className="h-4 w-4 text-green" />
                                    Diligencia
                                </h4>
                                <p className="mt-3 text-sm text-white/60 leading-relaxed pl-6">
                                    Hacer las cosas con esmero, rapidez, eficacia y eficiencia en todos nuestros procesos operativos.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}