import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-orange-700">Smart Juice Vending Machine</h3>
            <ul className="space-y-4 text-lg text-orange-600">
              <li>✓ Fresh oranges squeezed on demand</li>
              <li>✓ Contactless payment options</li>
              <li>✓ Real-time monitoring system</li>
              <li>✓ Temperature-controlled storage</li>
              <li>✓ Automatic cleaning system</li>
            </ul>
          </div>
          <div 
            className="rounded-lg flex items-center justify-center text-orange-500 min-h-[400px]"
            style={{
              backgroundImage: "url('/home/image 3.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgb(255, 237, 213)' // fallback bg-orange-100
            }}
          >
          </div>
        </div>
      </div>
    </section>
  )
}
