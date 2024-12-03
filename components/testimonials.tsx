import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "Business Owner",
    text: "iJooz has revolutionized our office refreshments. Our employees love the fresh juice option!"
  },
  {
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    text: "Having iJooz at my gym is perfect. Fresh orange juice right after workout!"
  },
  {
    name: "Michael Wong",
    role: "Mall Manager",
    text: "The iJooz machines are a hit with our shoppers. Reliable service and great quality."
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-200 flex items-center justify-center text-orange-500">
                  {testimonial.name[0]}
                </div>
                <p className="text-gray-600 mb-4 text-center italic">"{testimonial.text}"</p>
                <div className="text-center">
                  <h3 className="font-semibold text-orange-800">{testimonial.name}</h3>
                  <p className="text-orange-600 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
