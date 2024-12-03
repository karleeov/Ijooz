'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
        className="bg-white/80 hover:bg-white"
      >
        {language === 'en' ? '中文' : 'ENG'}
      </Button>
    </div>
  )
}

