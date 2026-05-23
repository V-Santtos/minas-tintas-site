import type { Metadata, Viewport } from 'next'
import { Anton, Fraunces, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Minas Tintas — Simonésia, MG',
  description:
    'Loja de tintas e acabamentos em Simonésia, Minas Gerais. Linha completa Maza, automotivo, ferramentas e muito mais.',
  openGraph: {
    title: 'Minas Tintas — Simonésia, MG',
    description: 'Tintas imobiliárias, automotivas, ferramentas e muito mais. Tudo que sua obra merece, em um só lugar.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${fraunces.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
