"use client"

import { trajectoryData } from "../data/trayectory-data";

export function Trajectory2() {
    return (
        <section id="trayectoria" className="bg-[#f0f4f8] py-16 lg:py-24 overflow-hidden relative z-0">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">

                <div className="relative w-full flex flex-col gap-16 lg:gap-12">
                    {trajectoryData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        // Lógica para separar el Mes del Año (ej: "Junio 2024" -> Mes: "Junio", Año: "2024")
                        let month = "";
                        let year = item.year;
                        const parts = item.year.split(" ");
                        if (parts.length > 1) {
                            month = parts[0];
                            year = parts[1];
                        }

                        return (
                            <div key={index} className="relative w-full">

                                {/* ==========================================
                                    VISTA MÓVIL (Apilado Vertical)
                                ========================================== */}
                                <div className="lg:hidden flex flex-col items-center">
                                    <div className="text-center mb-10 relative">
                                        <span className="text-5xl font-black text-gray-500 tracking-tighter block leading-none">
                                            {year}
                                        </span>
                                        {month && (
                                            <span className="text-2xl font-bold text-gray-600 capitalize block mt-1">
                                                {month}
                                            </span>
                                        )}
                                    </div>
                                    <div className={`relative ${isEven ? 'bg-[#a6ce3a]' : 'bg-[#a3b3df]'} rounded-[2.5rem] p-8 pt-16 shadow-lg w-full max-w-md text-center`}>
                                        {/* Círculos superpuestos */}
                                        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 ${isEven ? 'bg-[#91b530]' : 'bg-[#8997bd]'} rounded-full opacity-60 z-0`} />
                                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 ${isEven ? 'bg-[#a6ce3a]' : 'bg-[#a3b3df]'} border-[3px] border-white rounded-full z-10 flex items-center justify-center shadow-inner`}>
                                            <item.icon className="w-10 h-10 text-[#183563]" strokeWidth={1.5} />
                                        </div>
                                        {/* Contenido */}
                                        <div className="relative z-20 text-[#183563]">
                                            <h3 className="text-xl font-extrabold uppercase mb-2 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-snug font-medium opacity-90">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                {/* ==========================================
                                    VISTA ESCRITORIO (Diseño Alternado Brochure)
                                ========================================== */}
                                <div className="hidden lg:grid grid-cols-12 gap-6 items-center w-full relative">
                                    {isEven ? (
                                        // PÍLDORA VERDE (Alineada a la derecha)
                                        <>
                                            {/* Textos del Año */}
                                            <div className="col-span-3 flex flex-col justify-center text-right pr-12">
                                                <span className="text-[3.5rem] font-black text-gray-500 tracking-tighter leading-none">
                                                    {year}
                                                </span>
                                                {month && (
                                                    <span className="text-2xl font-bold text-gray-600 capitalize mt-1">
                                                        {month}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Píldora */}
                                            <div className="col-span-9 relative z-10">
                                                <div className="bg-[#a6ce3a] border-2 border-[#a6ce3a] rounded-full rounded-3xl py-7 pl-24 pr-10 shadow-lg min-h-[140px] flex items-center">
                                                    {/* Círculos superpuestos izquierdos */}
                                                    <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-[7.5rem] h-[7.5rem] bg-[#91b530] rounded-full z-0 opacity-60" />
                                                    <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-[5.5rem] h-[5.5rem] bg-[#a6ce3a] border-[3px] border-white rounded-full z-10 flex items-center justify-center shadow-inner">
                                                        <item.icon className="w-11 h-11 text-[#183563]" strokeWidth={1.5} />
                                                    </div>

                                                    {/* Contenido */}
                                                    <div className="relative z-20 text-[#183563] text-left">
                                                        <h3 className="text-lg font-black uppercase mb-1 leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[13px] leading-snug font-medium opacity-90">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Línea conectora sinuosa hacia abajo */}
                                                {index !== trajectoryData.length - 1 && (
                                                    <div className="absolute top-[50%] left-[-1.5rem] w-[80%] h-[calc(100%+3rem)] border-l-[3px] border-b-[3px] border-gray-400/30 rounded-bl-[4rem] z-[-1]" />
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        // PÍLDORA AZUL (Alineada a la izquierda)
                                        <>
                                            {/* Píldora */}
                                            <div className="col-span-9 relative z-10">
                                                <div className="bg-[#a3b3df] rounded-full rounded-3xl py-7 pr-24 pl-10 shadow-lg min-h-[140px] flex items-center">
                                                    {/* Círculos superpuestos derechos */}
                                                    <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-[7.5rem] h-[7.5rem] bg-[#8997bd] rounded-full z-0 opacity-60" />
                                                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-[5.5rem] h-[5.5rem] bg-[#a3b3df] border-[3px] border-white rounded-full z-10 flex items-center justify-center shadow-inner">
                                                        <item.icon className="w-11 h-11 text-[#183563]" strokeWidth={1.5} />
                                                    </div>

                                                    {/* Contenido */}
                                                    <div className="relative z-20 text-[#183563] text-right w-full">
                                                        <h3 className="text-lg font-black uppercase mb-1 leading-tight">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[13px] leading-snug font-medium opacity-90 ml-auto">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Línea conectora sinuosa hacia abajo */}
                                                {index !== trajectoryData.length - 1 && (
                                                    <div className="absolute top-[50%] right-[-1.5rem] w-[80%] h-[calc(100%+3rem)] border-r-[3px] border-b-[3px] border-gray-400/30 rounded-br-[4rem] z-[-1]" />
                                                )}
                                            </div>

                                            {/* Textos del Año */}
                                            <div className="col-span-3 flex flex-col justify-center text-left pl-12">
                                                <span className="text-[3.5rem] font-black text-gray-500 tracking-tighter leading-none">
                                                    {year}
                                                </span>
                                                {month && (
                                                    <span className="text-2xl font-bold text-gray-600 capitalize mt-1">
                                                        {month}
                                                    </span>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}