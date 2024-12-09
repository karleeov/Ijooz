"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Smartphone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.featuresTitle}</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Cpu className="mr-2" /> {t.hardwareTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">
                {t.hardwareDesc}
              </p>
              <div 
                className="w-full h-[300px] rounded-lg flex items-center justify-center text-orange-500"
                style={{
                  backgroundImage: "url('/home/image 1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgb(255, 237, 213)'
                }}
              >
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Smartphone className="mr-2" /> {t.softwareTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-orange-700 mb-6">
                {t.softwareDesc}
              </p>
              <div 
                className="w-full h-[300px] rounded-lg flex items-center justify-center text-orange-500"
                style={{
                  backgroundImage: "url('/home/image 4.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgb(255, 237, 213)'
                }}
              >
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
