"use client"

import { useState } from 'react'
import { useLanguage } from "@/context/LanguageContext"
import { translations } from "@/utils/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formType, setFormType] = useState('location');

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t.contact.pageTitle}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t.contact.formTitle}</h2>
          
          <Select
            value={formType}
            onValueChange={setFormType}
          >
            <SelectTrigger className="mb-6">
              <SelectValue placeholder={t.contact.selectEnquiry} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="location">{t.contact.locationPartnership}</SelectItem>
              <SelectItem value="business">{t.contact.businessPartnership}</SelectItem>
              <SelectItem value="general">{t.contact.generalEnquiry}</SelectItem>
            </SelectContent>
          </Select>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
              <Input type="text" placeholder={t.contact.namePlaceholder} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
              <Input type="email" placeholder={t.contact.emailPlaceholder} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.phone}</label>
              <Input type="tel" placeholder={t.contact.phonePlaceholder} />
            </div>

            {formType === 'location' && (
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.location}</label>
                <Input type="text" placeholder={t.contact.locationPlaceholder} />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
              <Textarea 
                placeholder={t.contact.messagePlaceholder} 
                className="h-32"
              />
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              {t.contact.submit}
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">{t.contact.locationTitle}</h2>
            <p className="text-gray-600 mb-4">{t.contact.locationDescription}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.contact.locationBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">{t.contact.businessTitle}</h2>
            <p className="text-gray-600 mb-4">{t.contact.businessDescription}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.contact.businessBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
