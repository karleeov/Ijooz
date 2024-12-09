"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function Hero() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <Button 
          variant={language === 'en' ? 'default' : 'outline'}
          onClick={() => setLanguage('en')}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          English
        </Button>
        <Button 
          variant={language === 'zh' ? 'default' : 'outline'}
          onClick={() => setLanguage('zh')}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          中文
        </Button>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/home/videoplayback.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="bg-orange-50/30 p-8 rounded-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-900">
            {t.titleMain} <span className="text-orange-500">{t.titleHighlight}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl mb-4 text-orange-800">
            {t.subtitle}
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-orange-800">
            {t.description1}
          </p>
          <p className="text-lg md:text-xl mb-8 text-orange-800">
            {t.description2}
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            {t.tryNow}
          </Button>
        </div>
      </div>
    </div>
  )
}
