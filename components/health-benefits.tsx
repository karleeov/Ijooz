"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Zap, Smile, Brain } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function HealthBenefits() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [Heart, Zap, Smile, Brain];
  const benefits = t.benefits.map((benefit, index) => ({
    ...benefit,
    icon: icons[index]
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.healthBenefitsTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-xl">
              <CardContent className="p-6 text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-orange-700">{benefit.title}</h3>
                <p className="text-orange-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
