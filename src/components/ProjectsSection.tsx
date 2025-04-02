'use client'

import React from 'react'
import Link from 'next/link' // Import Link for client-side navigation

// Define structure for tag styles
interface TagStyle {
  bg: string;
  text: string;
}

// Updated project data with tag style classes
const projects = [
  {
    title: 'Grant Advisor AI Chatbot',
    description: 'RAG AI Chatbot that communicates with users on suitable grants based on conversations',
    tags: ['AI/ML', 'NLP', 'Python'],
    tagStyle: { bg: 'bg-blue-100', text: 'text-blue-800' } as TagStyle,
    link: '/projects/grant-advisor'
  },
  {
    title: 'Optical Character Recognition',
    description: 'ML system to extract text from receipts with high accuracy',
    tags: ['Computer Vision', 'ML', 'Python'],
    tagStyle: { bg: 'bg-red-100', text: 'text-red-800' } as TagStyle,
    link: '/projects/ocr'
  },
  {
    title: 'Doerscircle Website Redesign',
    description: 'Increased user engagement from 10k to 100k users through strategic UX improvements',
    tags: ['UI/UX', 'Web Dev', 'Vue.js'],
    tagStyle: { bg: 'bg-green-100', text: 'text-green-800' } as TagStyle,
    link: '/projects/doerscircle'
  },
  {
    title: 'Legacy Code Refactoring',
    description: 'Vue 2 to Vue 3 migration with 30% complexity reduction and 25% faster feature delivery',
    tags: ['Web Dev', 'Vue.js', 'Performance'],
    tagStyle: { bg: 'bg-gray-200', text: 'text-gray-800' } as TagStyle,
    link: '/projects/legacy-refactoring'
  }
]

const ProjectsSection = () => {
  return (
    // Keep dark section background
    <section className="section bg-deep-navy text-off-white">
      <div className="container">
        <h2 className="section-title text-off-white">PROJECTS</h2> 
        <p className="section-subtitle text-gray-400">Showcasing key applications and contributions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            // Use the base .card class for light/dark background, keep flex structure
            <div key={index} className="card flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Content area */}
              <div className="p-6 flex-grow">
                {/* Title color adjusted for contrast */}
                <h3 className="text-xl font-semibold mb-3 text-electric-blue dark:text-electric-blue">{project.title}</h3>
                {/* Description uses default text colors from .card */}
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                {/* Tags container */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    // Apply new tag styles: lighter bg, darker text, more padding
                    <span 
                      key={i} 
                      className={`text-xs font-medium px-3 py-1 rounded-full ${project.tagStyle.bg} ${project.tagStyle.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Button area */} 
              <div className="p-6 pt-0 mt-auto"> 
                <Link href={project.link} passHref>
                  {/* Button style unchanged, works on light/dark */}
                  <button className="primary-btn w-full">VIEW DETAILS</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
