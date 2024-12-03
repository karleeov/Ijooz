import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="bg-orange-50/30  p-8 rounded-2xl shadow-lg">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-900">
            Fresh. Healthy. <span className="text-orange-500">Instant.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl mb-4 text-orange-800">
            深受全球喜愛的智能鮮榨橙汁機
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-orange-800">
            Experience the revolution in fresh juice vending with iJooz Hong Kong
          </p>
          <p className="text-lg md:text-xl mb-8 text-orange-800">
            IJOOZ 為目前全球規模最大的智能鮮榨橙汁售賣機，深受大眾喜愛。IJOOZ 讓你隨時來一杯鮮榨橙汁，補充維他命！
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            立即體驗 / Try Now
          </Button>
        </div>
      </div>
    </div>
  )
}
