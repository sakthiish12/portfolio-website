'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// Define a type for the dot style
interface DotStyle {
  width: string;
  height: string;
  top: string;
  left: string;
  opacity: number;
  animation: string;
}

const HeroSection = () => {
  // State to hold the dot styles
  const [dotStyles, setDotStyles] = useState<DotStyle[]>([]);

  // useEffect to generate styles only on the client after mount
  useEffect(() => {
    const generateStyles = () => {
      return Array.from({ length: 20 }).map(() => ({
        width: `${Math.random() * 10 + 2}px`,
        height: `${Math.random() * 10 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.1,
        animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`
      }));
    };
    // Set the styles after the component mounts
    setDotStyles(generateStyles());
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <section className="hero-section min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SAKTHIISH VIJAYADASS
            </h1>
            <h2 className="text-xl md:text-2xl text-electric-blue mb-6">
              Software Developer & Solutions Architect
            </h2>
            <p className="text-off-white opacity-80 mb-8 max-w-lg">
              Building innovative solutions with code, creativity, and strategic thinking
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <button className="primary-btn">VIEW PROJECTS</button>
              </Link>
              <Link href="/contact">
                <button className="secondary-btn">CONTACT ME</button>
              </Link>
            </div>
          </div>
          
          {/* Right Column: Tech Visualization (Hidden on small screens) */}
          <div className="hidden md:flex justify-center items-center relative h-[300px] lg:h-[400px]">
            {/* Rotating square outline */}
            <div className="absolute w-48 h-48 lg:w-64 lg:h-64 border-2 border-electric-blue/30 rounded-lg animate-spin-slow"></div>
            
            {/* Floating Code Symbols */}
            <span className="absolute top-[20%] left-[30%] text-electric-blue text-2xl opacity-50 animate-pulse delay-200">{'<>'}</span>
            <span className="absolute bottom-[25%] right-[35%] text-electric-blue text-3xl opacity-60 animate-pulse delay-500">{'{ }'}</span>
            <span className="absolute top-[40%] right-[20%] text-electric-blue text-xl opacity-40 animate-pulse delay-800">{'</>'}</span>
            <span className="absolute bottom-[30%] left-[25%] text-electric-blue text-2xl opacity-50 animate-pulse delay-1100">{'()'}</span>
            <span className="absolute top-[60%] left-[45%] text-electric-blue text-lg opacity-30 animate-pulse delay-1400">{'/>'}</span>
          </div>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-navy to-space-bg opacity-90"></div>
      
      {/* Animated dots background - now using state */}
      <div className="absolute inset-0 overflow-hidden">
        {dotStyles.map((style, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-electric-blue"
            style={style}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
