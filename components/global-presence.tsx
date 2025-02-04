"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function GlobalPresence() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = t.stats;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.globalPresenceTitle}</h2>
        <div className="mb-12 relative">
          <Image
            src="/home/image-1.png"
            alt={t.globalPresenceImageAlt}
            width={450}
            height={250}
            className="mx-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl">
              <CardContent className="p-6 text-center">
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
