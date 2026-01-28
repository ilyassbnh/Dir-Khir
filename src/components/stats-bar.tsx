import { Users, MapPin, Activity } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Citoyens Aidés",
  },
  {
    icon: MapPin,
    value: "12",
    label: "Villes",
  },
  {
    icon: Activity,
    value: "Active",
    label: "maintenant",
  },
]

export function StatsBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
