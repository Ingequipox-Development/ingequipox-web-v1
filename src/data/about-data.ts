// Datos del equipo de liderazgo
export const leadershipTeam = [
    {
        id: "l1",
        name: "Ing. Iván Vasco",
        role: "Gerente General",
        description: "Visión estratégica y liderazgo corporativo con más de 15 años de experiencia en el sector.",
        image: `${import.meta.env.BASE_URL}/about/lider1.jpg`,
    },
    {
        id: "l2",
        name: "Ing. Diana",
        role: "Directora de Proyectos",
        description: "Especialista en planificación y ejecución de infraestructura para tratamiento de aguas.",
        image: `${import.meta.env.BASE_URL}/about/lider2.jpg`,
    },
    {
        id: "l3",
        name: "Claudia Garcia",
        role: "Directora de Talento Humano",
        description: "Impulsando el desarrollo de nuestro activo más valioso: un equipo multidisciplinario de excelencia.",
        image: `${import.meta.env.BASE_URL}/about/lider3.jpg`,
    },
    {
        id: "l4",
        name: "Ruby Saenz",
        role: "Directora de SST",
        description: "Garantizando operaciones seguras y el bienestar integral de cada colaborador en campo.",
        image: `${import.meta.env.BASE_URL}/about/lider4.jpg`,
    }
]

// Imágenes generales
export const aboutImages = {
    mainGroupPhoto: `${import.meta.env.BASE_URL}/about/equipo.jpeg`,
    officeBackground: `${import.meta.env.BASE_URL}/about/oficina-fondo.jpg`,
}

// Textos estaticos
export const companyPhilosophy = {
    title: "Ingeniería con propósito ambiental",
    description: "Somos una empresa comprometida con el desarrollo sostenible y la preservación del medio ambiente, dedicada a la planificación y ejecución de proyectos que garantizan soluciones personalizadas y eficientes.",
    mission: "Proteger la vida y el medio ambiente mediante soluciones integrales de infraestructura e ingeniería enfocadas a un planeta sustentable.",
    vision: "Ser reconocidos como una empresa de gran calidad humana con sus clientes y colaboradores, mediante procesos definidos y estructurados, para proveer la mejor experiencia y satisfacción de nuestros clientes.",
    values: [
        { id: "v1", title: "Compromiso", description: "Con los clientes, el planeta y los proyectos. Cumpliendo con alcance, tiempo, presupuesto y calidad." },
        { id: "v2", title: "Calidad", description: "Brindamos servicios que cumplan y superen las expectativas de nuestros clientes en cada entrega." },
        { id: "v3", title: "Diligencia", description: "Actuamos con esmero, rapidez, eficacia y eficiencia en todos nuestros procesos operativos." },
    ]
}