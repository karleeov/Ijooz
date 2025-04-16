"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function VideoSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
            {t.videoSectionTitle || "Experience Ijooz"}
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            {t.videoSectionDescription ||
              "See how Ijooz is revolutionizing fresh juice convenience"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video controls className="w-full h-auto">
            <source src="/ijoozvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
