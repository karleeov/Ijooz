"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Coffee,
  Pizza,
  ShoppingBag,
  Megaphone,
  Building,
  School,
  Hospital,
  ShoppingCart,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react"

const defaultTranslations = {
  mainTitle: "Find Your Perfect Spot",
  locationTitle: "Offer Your Location",
  locationDesc:
    "Have a high-traffic space? Partner with us to host a vending machine and create additional revenue streams while providing convenience to your visitors.",
  advertisingTitle: "Advertise With Us",
  advertisingDesc:
    "Reach your target audience through our network of smart vending machines. Perfect for local businesses and brands looking for innovative advertising channels.",
}

export default function VendingLocations() {
  const t = defaultTranslations

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.mainTitle}</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Location Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="mr-2" />
                {t.locationTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">{t.locationDesc}</p>

              {/* Location Types Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Building, label: "Office Buildings", traffic: "500+ daily" },
                  { icon: ShoppingCart, label: "Shopping Centers", traffic: "1000+ daily" },
                  { icon: School, label: "Educational", traffic: "800+ daily" },
                  { icon: Hospital, label: "Healthcare", traffic: "600+ daily" },
                ].map((item, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-6 h-6 text-orange-500" />
                      <h3 className="font-semibold text-orange-800">{item.label}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-orange-600">
                      <Users className="w-4 h-4" />
                      <span>{item.traffic} visitors</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {[
                  { icon: DollarSign, text: "Earn passive income from sales" },
                  { icon: Clock, text: "24/7 automated operations" },
                  { icon: CheckCircle, text: "Free maintenance & restocking" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-orange-700">
                    <benefit.icon className="w-5 h-5 text-orange-500" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Advertising Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Megaphone className="mr-2" />
                {t.advertisingTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">{t.advertisingDesc}</p>

              {/* Ad Spaces Showcase */}
              <div className="relative w-full h-[200px] bg-orange-50 rounded-lg p-4 mb-6">
                <div className="absolute inset-4 bg-orange-200 rounded-lg border-2 border-orange-300">
                  {/* Digital Screen Area */}
                  <div className="absolute top-2 left-2 right-2 h-20 bg-white rounded-md border border-orange-300 flex items-center justify-center">
                    <div className="text-orange-500 text-center">
                      <Megaphone className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Digital Ad Display</span>
                    </div>
                  </div>

                  {/* Product Showcase Area */}
                  <div className="absolute bottom-2 left-2 right-2 h-16 flex gap-2">
                    {[Coffee, Pizza, ShoppingBag].map((Icon, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-white rounded-md flex items-center justify-center border border-orange-300"
                      >
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advertising Options */}
              <div className="grid gap-4">
                {[
                  {
                    title: "Digital Display Ads",
                    desc: "15-second spots on HD screens",
                    price: "Custom Pricing",
                  },
                  {
                    title: "Product Placement",
                    desc: "Premium shelf space",
                    price: "Custom Pricing",
                  },
                  {
                    title: "Branded Machines",
                    desc: "Full machine wrap advertising",
                    price: "Custom pricing",
                  },
                ].map((option, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-orange-800">{option.title}</h3>
                      <span className="text-sm text-orange-600">{option.price}</span>
                    </div>
                    <p className="text-sm text-orange-700">{option.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

