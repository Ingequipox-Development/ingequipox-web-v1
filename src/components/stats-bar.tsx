import { Building2, Leaf, Droplets, Award } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "+15 años",
    label: "De experiencia en el sector",
  },
  {
    icon: Droplets,
    value: "Múltiples",
    label: "Ciudades con operación activa",
  },
  {
    icon: Leaf,
    value: "100%",
    label: "Proyectos sostenibles",
  },
  {
    icon: Award,
    value: "+40",
    label: "Obras entregadas",
  },
]

export function StatsBar() {
  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-6xl px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-2xl shadow-navy/20 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-3 bg-card p-6 lg:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-green">
              <stat.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <div className="text-2xl font-semibold text-navy lg:text-3xl">
                {stat.value}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
