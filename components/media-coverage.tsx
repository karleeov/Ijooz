"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function MediaCoverage() {
  const { language } = useLanguage();
  const t = translations[language];

  const mediaLogos = [
    "/home/image-2.png",
    "/home/image-3.png",
    "/home/image-4.png",
    "/home/image-5.png",
    "/home/image-6.png",
    "/home/image-7.png"
  ]
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.mediaCoverageTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center mb-12">
          {mediaLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={t.mediaLogoAlts[index]}
              width={120}
              height={80}
              className="mx-auto hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.mediaQuotes.map((quote, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl">
              <CardContent className="p-6">
                <p className="text-orange-700 italic">
                  "{quote.quote}"
                </p>
                <div className="mt-4 font-semibold text-orange-800">- {quote.source}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
