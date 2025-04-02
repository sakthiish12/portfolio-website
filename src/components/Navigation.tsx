'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-navy bg-opacity-95 shadow-lg' : 'bg-deep-navy'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-off-white">
          SAKTHIISH
        </Link>
        
        <div className="hidden md:flex space-x-1">
          {['home', 'about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
            <Link 
              key={item}
              href={item === 'home' ? '/' : `/${item}`}
              className={`nav-link ${activeLink === item ? 'active' : ''}`}
              onClick={() => setActiveLink(item)}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
        
        <button className="md:hidden text-off-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
