import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LCalculator',
  description: 'A collection of useful calculators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-VQV7BL0DVQ');
        `}</Script>
        <Script 
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8630405999832993"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-VQV7BL0DVQ"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
      </body>
    </html>
  )
} 