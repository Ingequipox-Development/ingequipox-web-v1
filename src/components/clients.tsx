export function Clients() {
    const clients = [
        { name: "Almacafé", logo: `${import.meta.env.BASE_URL}/clients/logo_almacafe.png` },
        { name: "Atesa de Occidente", logo: `${import.meta.env.BASE_URL}/clients/logo_artesa.png` },
        { name: "Alcaldia de Cienaga", logo: `${import.meta.env.BASE_URL}/clients/logo-alcaldia-cienaga.png` },
        { name: "Alcaldia de Cali", logo: `${import.meta.env.BASE_URL}/clients/logo-alcaldia-cali.png` },
        { name: "Interaseo", logo: `${import.meta.env.BASE_URL}/clients/logo_intesareo.png` },
        { name: "Operadores de la Sierra", logo: `${import.meta.env.BASE_URL}/clients/logo_operador_sierra.png` },
    ]

    return (
        //color de borde azul
        <section id="clientes" className="bg-muted py-16 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Cabecera de la sección adaptada a fondo blanco */}
                <div className="text-center mb-10">
                    <h2 className="text-xl font-bold uppercase tracking-wider text-green-dark">
                        Casos de Éxito
                    </h2>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                        Empresas que confían en nosotros
                    </p>
                </div>

                {/* Cuadrícula de Logos sin tarjetas, directamente sobre el fondo blanco */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="group flex h-30 w-full items-center justify-center p-4 transition-all duration-300 cursor-default"
                        >
                            <img
                                src={client.logo}
                                alt={`Logo de ${client.name}`}
                                className="max-h-full max-w-full object-contain filter transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-180"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}