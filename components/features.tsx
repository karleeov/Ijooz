import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Smartphone } from "lucide-react"

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Cutting-Edge Technology</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Cpu className="mr-2" /> iJooz Hardware
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">
                Our smart juice vending machine combines sleek design with innovative technology for an unparalleled user experience.
              </p>
              <div className="w-full h-[300px] bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                Hardware Image
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Smartphone className="mr-2" /> iJooz Software
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">
                Our real-time monitoring and analytics platform ensures efficient operations and top-notch quality control.
              </p>
              <div className="w-full h-[300px] bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                Software Interface
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
