'use client'

const SkillsOverview = () => {
  const skills = [
    {
      title: "Full-Stack Development",
      icon: "💻",
      color: "#0088FF", // electric_blue
      description: "Building complete web applications from front-end interfaces to back-end systems"
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      color: "#C41E3A", // ruby_red
      description: "Creating intelligent systems with natural language processing and computer vision"
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      color: "#A7E8BD", // soft_mint
      description: "Designing intuitive and engaging user experiences with modern design tools"
    }
  ]

  return (
    <section className="py-20 bg-off-white" id="skills-overview">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-deep-navy">SKILLS OVERVIEW</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ borderColor: skill.color }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-deep-navy">{skill.title}</h3>
              <p className="text-warm-slate">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsOverview
