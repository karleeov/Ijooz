import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { LanguageProvider } from '@/context/LanguageContext'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ijooz.com'),
  title: {
    default: 'ijooz - Fresh Orange Juice Vending Machine | Hong Kong 自動販賣機',
    template: '%s | ijooz Hong Kong 香港'
  },
  description: '香港首個鮮榨橙汁自動販賣機 | 新鮮現榨橙汁 | 自動販賣機合作夥伴計劃 | First Fresh-Squeezed Orange Juice Vending Machine in Hong Kong | Vending Machine Partnership Program',
  keywords: [
    '橙汁自動販賣機', 
    'orange juice vending machine', 
    'fresh juice hong kong', 
    '鮮榨果汁', 
    'vending machine', 
    'hong kong', 
    '香港', 
    'healthy drinks', 
    '健康飲品',
    '自動販賣機合作',
    'vending machine partnership',
    '場地合作',
    'location partnership',
    '商業合作',
    'business partnership',
    '自動販賣機投資',
    'vending machine investment',
    '香港自動販賣機市場',
    'hong kong vending market'
  ],
  authors: [{ name: 'ijooz' }],
  creator: 'ijooz',
  publisher: 'ijooz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-HK': '/en',
      'zh-HK': '/zh'
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_HK',
    alternateLocale: 'en_HK',
    title: 'ijooz - Fresh Orange Juice Vending Machine | Hong Kong',
    description: '香港首個鮮榨橙汁自動販賣機 | 新鮮現榨橙汁 | First Fresh-Squeezed Orange Juice Vending Machine in Hong Kong',
    siteName: 'ijooz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ijooz Orange Juice Vending Machine',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QGGWE0E30V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QGGWE0E30V');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
