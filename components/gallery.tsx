"use client"

import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const galleryImages = [
    "/home/image 5.png",
    "/home/image 6.png",
    "/home/image 7.png",
    "/home/image-8.png",
    "/home/image-9.png",
    "/home/image.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">{t.galleryTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={t.galleryImageAlts[index]}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
