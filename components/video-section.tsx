"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function VideoSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      {/* Floating oranges decoration */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-orange-400 opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-orange-500 opacity-20 animate-float-slow animation-delay-1000"></div>
      <div className="absolute top-40 right-1/3 w-8 h-8 rounded-full bg-yellow-400 opacity-20 animate-float-slow animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${animationClass}`}
        >
          <div className="inline-block relative">
            <span className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-orange-400 opacity-70"></span>
            <span className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-orange-400 opacity-70"></span>
            <h2 className="text-4xl md:text-6xl font-bold text-orange-800 mb-3 tracking-tight">
              {language === "zh"
                ? "iJooz 智能鮮榨橙汁"
                : "iJooz Smart Fresh Orange Juice"}
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-orange-700 max-w-3xl mx-auto mb-8 font-light italic">
            {language === "zh"
              ? "⼀杯鮮榨橙汁，能改變什麼？"
              : "How can a cup of fresh orange juice change your life?"}
          </p>

          {/* Health Statistics with glow effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
            <div
              className={`bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-150 ${animationClass} hover:shadow-orange-200 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-3">
                75%
              </div>
              <p className="text-orange-800">
                {language === "zh"
                  ? "全球人口處於「亞健康」狀態"
                  : 'Global population in "sub-health" state'}
              </p>
            </div>
            <div
              className={`bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-300 ${animationClass} hover:shadow-orange-200 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-3">
                50%
              </div>
              <p className="text-orange-800">
                {language === "zh"
                  ? "香港民眾認為健康最重要"
                  : "Hong Kong residents prioritize health"}
              </p>
            </div>
            <div
              className={`bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-xl transition-all duration-1000 delay-450 ${animationClass} hover:shadow-orange-200 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-3">
                10%
              </div>
              <p className="text-orange-800">
                {language === "zh"
                  ? "每日攝取維生素C可提升血漿水平"
                  : "Daily vitamin C intake increases plasma levels"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-1000 delay-600 ${animationClass}`}
        >
          {/* Video Column with reflection effect */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <video
              controls
              autoPlay
              muted
              loop
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/ijoozvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Video reflection */}
            <div className="h-20 bg-gradient-to-b from-white/30 to-transparent backdrop-blur-sm absolute -bottom-10 left-0 right-0 transform rotate-180 scale-y-50 opacity-30"></div>
          </div>

          {/* Benefits Column with glass morphism */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl relative overflow-hidden group">
            {/* Animated orange icon */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-400 opacity-10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>

            <h3 className="text-3xl font-bold text-orange-800 mb-8 relative">
              <span className="inline-block pb-2 border-b-2 border-orange-400">
                {language === "zh" ? "誰是 iJooz?" : "Who is iJooz?"}
              </span>
            </h3>
            <ul className="space-y-5 relative z-10">
              <li className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 shadow-md">
                  •
                </div>
                <span className="text-lg">
                  {language === "zh"
                    ? "新加坡規模最大的鮮榨橙汁營運商"
                    : "Singapore's largest fresh orange juice operator"}
                </span>
              </li>
              <li className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 shadow-md">
                  •
                </div>
                <span className="text-lg">
                  {language === "zh"
                    ? "專業清洗工場，食環署認證衛生"
                    : "Professional cleaning facility, health-certified"}
                </span>
              </li>
              <li className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 shadow-md">
                  •
                </div>
                <span className="text-lg">
                  {language === "zh"
                    ? "不加糖，不加水，不加防腐劑"
                    : "No sugar, no water, no preservatives added"}
                </span>
              </li>
              <li className="flex items-start transform transition-transform hover:translate-x-2 duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 shadow-md">
                  •
                </div>
                <span className="text-lg">
                  {language === "zh"
                    ? "全球品牌，實力認可"
                    : "Global brand with recognized strength"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Highlights with 3D card effect */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-900 ${animationClass}`}
        >
          <h3 className="text-3xl font-bold text-orange-800 mb-10 inline-block relative">
            <span className="relative z-10">
              {language === "zh" ? "產品特點" : "Product Features"}
            </span>
            <span className="absolute left-0 bottom-0 w-full h-3 bg-yellow-200 opacity-50 -z-0"></span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { zh: "澳州鮮橙", en: "Australian Oranges" },
              { zh: "安全衛生", en: "Safe & Hygienic" },
              { zh: "100%純天然", en: "100% Natural" },
              { zh: "新鮮壓榨", en: "Freshly Squeezed" },
            ].map((item, index) => (
              <div key={index} className="group perspective">
                <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-500 group-hover:rotate-y-10 group-hover:shadow-orange-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="text-orange-800 font-bold text-xl mb-2">
                    {language === "zh" ? item.zh : item.en}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-24 relative transition-all duration-1000 delay-1000 ${animationClass}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform -rotate-1"></div>
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl"></div>

          <div className="relative p-10 md:p-16 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-800 mb-3">
                {language === "zh"
                  ? "了解更多 iJooz"
                  : "Learn More About iJooz"}
              </h3>
              <p className="text-orange-700 mb-6">
                {language === "zh"
                  ? "我們的專業團隊隨時為您服務，免費環境視察，提供最適合您需求的解決方案。"
                  : "Our professional team is ready to serve you, offering free environment assessment and solutions tailored to your needs."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-300/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {language === "zh" ? "聯繫我們" : "Contact Us"}
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <button className="inline-flex items-center px-6 py-3 border-2 border-orange-400 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300">
                  {language === "zh" ? "獲取產品資料" : "Get Product Info"}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-bold shadow-lg">
                iJooz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
