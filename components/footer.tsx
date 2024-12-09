"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{t.footer.about.title}</h3>
            <p className="text-orange-200">
              {t.footer.about.description}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">{t.footer.contact.title}</h3>
            <p className="text-orange-200">
              {t.footer.contact.email}<br />
              {t.footer.contact.phone}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">{t.footer.social.title}</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/iJoozHongKong" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-200 hover:text-white transition-colors"
                aria-label={t.footer.social.facebook}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-orange-200 hover:text-white transition-colors"
                aria-label={t.footer.social.twitter}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-orange-200 hover:text-white transition-colors"
                aria-label={t.footer.social.instagram}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">{t.footer.newsletter.title}</h3>
            <div className="flex gap-2">
              <Input 
                placeholder={t.footer.newsletter.emailPlaceholder} 
                className="bg-orange-800 border-orange-700 text-white placeholder-orange-300" 
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                {t.footer.newsletter.subscribeButton}
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
