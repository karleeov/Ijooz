import { Card, CardContent } from "@/components/ui/card"
import { Truck, Recycle, Leaf, ShieldCheck } from 'lucide-react'
import Image from "next/image"

export default function Supply() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Our Commitment to Quality</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">iJooz Supply</h3>
              <p className="text-orange-600 mb-6">
                We ensure a constant supply of the freshest oranges, delivered right when you need them.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-700">
                  <Truck className="w-5 h-5 text-orange-500" />
                  <span>Just-in-time delivery</span>
                </div>
                <div className="flex items-center gap-2 text-orange-700">
                  <Leaf className="w-5 h-5 text-orange-500" />
                  <span>100% Fresh Oranges</span>
                </div>
                <div className="flex items-center gap-2 text-orange-700">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">iJooz Recycle</h3>
              <p className="text-orange-600 mb-6">
                Our commitment to sustainability extends beyond great juice. We're dedicated to eco-friendly practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-orange-700">
                  <Recycle className="w-5 h-5 text-orange-500" />
                  <span>100% Recyclable Packaging</span>
                </div>
                <div className="flex items-center gap-2 text-orange-700">
                  <Leaf className="w-5 h-5 text-orange-500" />
                  <span>Composting Program</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Image
            src="/placeholder.svg?height=200&width=800"
            alt="Orange grove"
            width={800}
            height={200}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

