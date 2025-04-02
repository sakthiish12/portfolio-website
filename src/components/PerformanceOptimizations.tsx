'use client'

import { useEffect } from 'react'

const PerformanceOptimizations = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    if (typeof window !== 'undefined') {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver(() => {
        console.log('LCP metrics recorded')
        // Report to analytics in a real application
      })
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
      
      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver(() => {
        console.log('FID metrics recorded')
        // Report to analytics in a real application
      })
      
      fidObserver.observe({ type: 'first-input', buffered: true })
      
      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver(() => {
        console.log('CLS metrics recorded')
        // Report to analytics in a real application
      })
      
      clsObserver.observe({ type: 'layout-shift', buffered: true })
      
      // Cleanup
      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])
  
  useEffect(() => {
    // Intersection Observer for animation on scroll
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            
            // Add animation class
            if (target.classList.contains('animate-on-scroll')) {
              target.classList.add('animated')
            }
            
            // Handle lazy-loaded components
            if (target.classList.contains('lazy-component')) {
              target.classList.add('loaded')
            }
            
            // Unobserve after animation
            observer.unobserve(target)
          }
        })
      }, { threshold: 0.1 })
      
      // Observe all elements with animation classes
      document.querySelectorAll('.animate-on-scroll, .lazy-component').forEach(el => {
        observer.observe(el)
      })
      
      return () => {
        observer.disconnect()
      }
    }
  }, [])
  
  return null // This is a utility component with no UI
}

export default PerformanceOptimizations
