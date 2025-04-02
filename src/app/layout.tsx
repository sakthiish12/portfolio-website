import PerformanceOptimizations from '@/components/PerformanceOptimizations'
import ClientLayoutSetup from '@/components/ClientLayoutSetup'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Sakthiish Vijayadass | Software Developer & Solutions Architect',
  description: 'Portfolio website of Sakthiish Vijayadass, a Software Developer and Solutions Architect specializing in full-stack development, AI/ML, and UI/UX design.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A2A3A',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <ClientLayoutSetup>
          {children}
        </ClientLayoutSetup>
      </body>
    </html>
  )
}
