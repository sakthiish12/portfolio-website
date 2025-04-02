'use client'

import { useEffect } from 'react'
import PerformanceOptimizations from '@/components/PerformanceOptimizations'

// This component wraps parts of the layout that require client-side hooks or components.
export default function ClientLayoutSetup({ children }: { children: React.ReactNode }) {
  
  // useEffect for preloading fonts (moved from layout.tsx)
  useEffect(() => {
    // Add preload for critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/montserrat-v25-latin-700.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/inter-v12-latin-regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
    ]

    preloadLinks.forEach(({ rel, href, as, type, crossOrigin }) => {
      // Check if link already exists
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = rel
        link.href = href
        link.as = as
        link.type = type
        if (crossOrigin) link.crossOrigin = crossOrigin
        document.head.appendChild(link)
      }
    })
  }, [])

  return (
    <>
      <PerformanceOptimizations />
      {children}
    </>
  )
} 