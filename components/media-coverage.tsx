import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function MediaCoverage() {
  const mediaLogos = Array(6).fill("/placeholder.svg?height=30&width=120")
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Media Coverage</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mb-12">
          {mediaLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Media logo ${index + 1}`}
              width={120}
              height={30}
              className="mx-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Array(3).fill(null).map((_, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl">
              <CardContent className="p-6">
                <p className="text-orange-700 italic">
                  "iJooz is revolutionizing the fresh juice industry with their innovative smart vending solutions."
                </p>
                <div className="mt-4 font-semibold text-orange-800">- Tech Innovators Magazine</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

