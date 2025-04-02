'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SkillsOverview from '@/components/SkillsOverview'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import './globals.css'

// Dynamically import the SkillsGalaxy component with SSR disabled
// This improves initial page load performance since Three.js is heavy
const SkillsGalaxy = dynamic(() => import('@/components/SkillsGalaxy'), {
  ssr: false,
  loading: () => (
    <div className="galaxy-container w-full">
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title text-off-white">SKILLS GALAXY</h2>
        <p className="section-subtitle">Explore my technical universe</p>
        <div className="w-full h-[600px] flex items-center justify-center">
          <div className="text-off-white text-center">
            <div className="inline-block w-12 h-12 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading 3D Skills Galaxy...</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Mark the page as loaded after initial render
    setIsLoaded(true)

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => {
      // Clean up observer on component unmount
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <main className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navigation />
      <HeroSection />
      <SkillsOverview />
      <ProjectsSection />
      <SkillsGalaxy />
      <ContactSection />
      <Footer />
    </main>
  )
}
