import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">About iJooz</h3>
            <p className="text-orange-200">
              Revolutionizing fresh juice vending with smart, healthy solutions for a better tomorrow.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <p className="text-orange-200">
              Email: info@ijooz.com<br />
              Phone: +852 1234 5678
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">關注我們 / Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/iJoozHongKong" target="_blank" rel="noopener noreferrer" className="text-orange-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-orange-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-orange-800 border-orange-700 text-white placeholder-orange-300" />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
          <p>&copy; 2024 iJooz Hong Kong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

