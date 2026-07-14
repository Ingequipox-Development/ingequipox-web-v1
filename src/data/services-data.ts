import { LayoutGrid, Factory, Activity, Wrench } from "lucide-react"

export interface Service {
    id: number
    tabLabel: string
    title: string
    description: string
    icon: Function
    items: string[]
    images: string[]
}

export const servicesData = [
    {
        id: 1,
        tabLabel: "Operación y mantenimiento de plantas",
        title: "Operación y mantenimiento de plantas",
        description: "Contamos con personal calificado para realizar programas de mantenimiento con el fin de prever y corregir problemas en la operación de las plantas de tratamiento.",
        icon: LayoutGrid,
        items: [
            "Programa de mantenimiento preventivo",
            "Mantenimiento correctivo de equipos",
            "Monitoreo de operación",
            "Optimización de procesos"
        ],
        images: [
            `${import.meta.env.BASE_URL}/services/servicio-1.jpg`,
            `${import.meta.env.BASE_URL}/services/servicio-1b.jpg`
        ],
    },
    {
        id: 2,
        tabLabel: "Modernización y ampliación de plantas",
        title: "Modernización y ampliación de plantas",
        description: "Servicio de optimización y ampliación de cada uno de los procesos que integran una planta de tratamiento de agua.",
        icon: Factory,
        items: [
            "Ampliación de plantas existentes",
            "Tanques de almacenamiento",
            "Estructuras de skids",
            "Control de calidad en cada etapa"
        ],
        images: [
            `${import.meta.env.BASE_URL}/services/servicio-2.png`,
            `${import.meta.env.BASE_URL}/services/servicio-2b.png`
        ],
    },
    {
        id: 3,
        tabLabel: "Tratamiento de aguas",
        title: "Tratamiento de aguas",
        description: "Tratamiento de agua potable, residual, industrial y agua para sistemas de enfriamiento y generación de vapor.",
        icon: Activity,
        items: [
            "Tratamiento de agua potable",
            "Tratamiento de aguas residuales",
            "Tratamiento de aguas industriales",
            "Tratamiento de aguas para sistemas de enfriamiento y generación de vapor"
        ],
        images: [
            `${import.meta.env.BASE_URL}/services/servicio-3.jpg`,
            `${import.meta.env.BASE_URL}/services/servicio-3b.jpg`
        ],
    },
    {
        id: 4,
        tabLabel: "Ingeniería y construcción",
        title: "Ingeniería y construcción",
        description: "Diseño, ingeniería de detalle, procurement y construcción de sistemas para tratamiento de aguas, incluyendo obras civiles, electromecánicas y montajes especiales.",
        icon: Wrench,
        items: [
            "Ingeniería de detalle de plantas de tratamiento",
            "Construcción de obras civiles",
            "Instalaciones electromecánicas",
            "Montajes especiales y puesta en marcha"
        ],
        images: [
            `${import.meta.env.BASE_URL}/services/servicio-4.jpg`,
            `${import.meta.env.BASE_URL}/services/servicio-4b.png`
        ],
    }
]