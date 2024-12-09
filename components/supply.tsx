"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Truck, Recycle, Leaf, ShieldCheck } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function Supply() {
  const { language } = useLanguage();
  const t = translations[language];

  const iconMap = {
    truck: Truck,
    recycle: Recycle,
    leaf: Leaf,
    shieldCheck: ShieldCheck
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.supplyCommitmentTitle}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">{t.supplySection.title}</h3>
              <p className="text-orange-600 mb-6">
                {t.supplySection.description}
              </p>
              <div className="space-y-4">
                {t.supplySection.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-2 text-orange-700">
                      <Icon className="w-5 h-5 text-orange-500" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-700">{t.recycleSection.title}</h3>
              <p className="text-orange-600 mb-6">
                {t.recycleSection.description}
              </p>
              <div className="space-y-4">
                {t.recycleSection.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-2 text-orange-700">
                      <Icon className="w-5 h-5 text-orange-500" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Image
            src="/home/image-10.png"
            alt={t.orangeGroveAlt}
            width={400}
            height={100}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
