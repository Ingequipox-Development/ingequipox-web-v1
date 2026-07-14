import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Contact } from "../components/contact"
import { Services1 } from "../components/services-1"

export function ServicesPage() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            {/* Cabecera de la Página (Page Hero) */}
            <div className="bg-navy-deep pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                    {/* Botón de Retroceso */}
                    <button
                        onClick={() => navigate(-1)}
                        className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Volver a la página anterior
                    </button>

                    <span className="text-xl font-bold uppercase tracking-wider text-green">
                        Soluciones Integrales
                    </span>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Nuestros Servicios
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
                        Desarrollamos e implementamos ingeniería de precisión operativa para cada etapa de tus proyectos de tratamiento de agua.
                    </p>
                    <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#a6ce3a]" />
                </div>
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, #a6ce3a 0%, transparent 50%)' }} />
            </div>

            {/* Sección Patrón Zig-Zag */}
            <Services1 showHeader={false} />

            <Contact />
        </div>
    )
}