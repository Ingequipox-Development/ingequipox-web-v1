import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Target, Eye, ShieldCheck, CheckCircle2 } from "lucide-react"
import { companyPhilosophy } from "../data/about-data"
import { LeadershipSection } from "../components/leaders"
import { Contact } from "../components/contact"

export function AboutPage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* Cabecera (Page Hero) */}
            <div className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Volver a la página anterior
                    </button>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Quiénes Somos
                    </h1>
                    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#a6ce3a]" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 80% -20%, #a6ce3a 0%, transparent 50%)' }} />
            </div>

            {/* Misión, Visión y Valores */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Misión */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#183563] rounded-xl text-[#a6ce3a]">
                                    <Target className="h-8 w-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#183563]">Misión</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{companyPhilosophy.mission}</p>
                        </div>

                        {/* Visión */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#183563] rounded-xl text-[#a6ce3a]">
                                    <Eye className="h-8 w-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#183563]">Visión</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{companyPhilosophy.vision}</p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="mt-8 bg-slate-50 p-8 rounded-3xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-[#183563] rounded-xl text-[#a6ce3a]">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#183563]">Nuestros Valores</h2>
                        </div>
                        {/* Grilla interna para alinear los 3 valores horizontalmente en pantallas grandes */}
                        <div className="grid gap-6 md:grid-cols-3 pt-6">
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
                </div>
            </section>

            {/* Sección de liderazgo con fondo oscuro */}
            <LeadershipSection />

            {/* Contacto final */}
            <Contact />
        </div>
    )
}