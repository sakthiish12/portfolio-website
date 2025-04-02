'use client'

import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  return (
    <section className="py-20 bg-off-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-deep-navy">CONTACT ME</h2>
        <p className="section-subtitle">Let&apos;s discuss your project</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form 
              action="https://formspree.io/f/mvgkwzen"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-warm-slate mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-slate border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-warm-slate mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-slate border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-warm-slate mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-slate border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue text-gray-900 dark:text-gray-900"
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-warm-slate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-warm-slate border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="primary-btn px-8 py-4 flex items-center"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-deep-navy mb-2">Email</h3>
              <p className="text-warm-slate">sakthiish@example.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-deep-navy mb-2">Location</h3>
              <p className="text-warm-slate">Singapore</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-electric-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-deep-navy mb-2">Availability</h3>
              <p className="text-warm-slate">Open to new opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
