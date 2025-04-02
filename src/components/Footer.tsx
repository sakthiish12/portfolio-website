'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-deep-navy text-off-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} Sakthiish Vijayadass | Singapore</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:sakthiish@example.com" className="text-electric-blue hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
