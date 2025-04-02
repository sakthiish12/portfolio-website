'use client'

import { useState } from 'react'
import Image from 'next/image'

const ImageWithLoading = ({ src, alt, width, height, className = '' }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-warm-slate bg-opacity-10">
          <div className="w-8 h-8 border-4 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  )
}

export default ImageWithLoading
