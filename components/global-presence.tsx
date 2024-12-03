import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function GlobalPresence() {
  const stats = [
    { value: "500+", label: "Locations", icon: "🌎" },
    { value: "1M+", label: "Cups Served", icon: "🍊" },
    { value: "24/7", label: "Operation", icon: "⏰" },
    { value: "100%", label: "Fresh", icon: "🌿" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Our Global Footprint</h2>
        <div className="mb-12 relative">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Global Presence Map"
            width={800}
            height={400}
            className="mx-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-sm text-orange-700">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

