import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aliramedia - Custom Software | Mobile Apps | Website',
  description: 'Aliramedia is a specialist mobile apps, custom software and websites development company based in Makassar, Indonesia.',
  keywords: 'software development, mobile apps, web development, Makassar, Indonesia',
  openGraph: {
    title: 'Aliramedia - Custom Software | Mobile Apps | Website',
    description: 'Professional software development company in Makassar, Indonesia',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="a5bffce6dbd4469c" />
        <link rel="icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
      </head>
      <body className="bg-white dark:bg-dark text-gray-900 dark:text-white">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
