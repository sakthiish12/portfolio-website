'use client'

import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Html, useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'

const SkillsGalaxy = () => {
  const controlsRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  const categories = [
    { name: "Languages", color: "#0088FF", position: [0, 0, 0] },
    { name: "Frameworks", color: "#C41E3A", position: [7.5, 3, -4.5] },
    { name: "(Unused)", color: "#FFFFFF", position: [100, 100, 100] },
    { name: "(Unused)", color: "#FFFFFF", position: [100, 100, 100] },
    { name: "Mobile Development", color: "#FFA500", position: [-3, 4.5, 4.5] },
    { name: "Data and AI", color: "#800080", position: [-4.5, -6, 4.5] },
    { name: "Tools & Concepts", color: "#008080", position: [-6, 4.5, -3] },
    { name: "Databases", color: "#FFFF00", position: [6, -1.5, 6] }
  ]
  
  // Increase spread factor and base offsets again for more separation
  const skillSpreadFactor = 2.5; // Increased from 2.0
  const skills = [
    // Languages (Category Index: 0) - Increased base offsets & spread
    { name: "Python", category: 0, size: 1.2, position: [1.3 * skillSpreadFactor, 0.8 * skillSpreadFactor, 0.8 * skillSpreadFactor] },
    { name: "JavaScript", category: 0, size: 1.1, position: [1.1 * skillSpreadFactor, -0.6 * skillSpreadFactor, 1.3 * skillSpreadFactor] },
    { name: "TypeScript", category: 0, size: 1, position: [0.8 * skillSpreadFactor, 1.1 * skillSpreadFactor, -0.8 * skillSpreadFactor] },
    { name: "Java", category: 0, size: 0.9, position: [-0.8 * skillSpreadFactor, 0.8 * skillSpreadFactor, 1.1 * skillSpreadFactor] },
    { name: "SQL", category: 0, size: 0.8, position: [0.5 * skillSpreadFactor, -0.8 * skillSpreadFactor, -1.0 * skillSpreadFactor] },
    { name: "C", category: 0, size: 0.8, position: [0.6 * skillSpreadFactor, 0.5 * skillSpreadFactor, -1.3 * skillSpreadFactor] },
    { name: "C++", category: 0, size: 0.8, position: [-0.5 * skillSpreadFactor, -0.6 * skillSpreadFactor, -1.1 * skillSpreadFactor] },
    { name: "HTML", category: 0, size: 0.9, position: [0.9 * skillSpreadFactor, 0.6 * skillSpreadFactor, 1.0 * skillSpreadFactor] },
    { name: "CSS", category: 0, size: 0.9, position: [-0.7 * skillSpreadFactor, -0.9 * skillSpreadFactor, 1.2 * skillSpreadFactor] },
    
    // Frameworks (Category Index: 1) - Increased base offsets & spread
    { name: "React", category: 1, size: 1.2, position: [0.9 * skillSpreadFactor, 0.9 * skillSpreadFactor, 0.9 * skillSpreadFactor] },
    { name: "Vue.js", category: 1, size: 1.1, position: [-0.9 * skillSpreadFactor, -0.9 * skillSpreadFactor, -0.9 * skillSpreadFactor] },
    { name: "Django", category: 1, size: 1, position: [1.2 * skillSpreadFactor, 0.5 * skillSpreadFactor, -0.5 * skillSpreadFactor] },
    { name: "Flask", category: 1, size: 0.9, position: [-1.2 * skillSpreadFactor, 1.2 * skillSpreadFactor, 0.5 * skillSpreadFactor] },
    { name: "Express", category: 1, size: 0.8, position: [0.5 * skillSpreadFactor, -1.2 * skillSpreadFactor, 1.2 * skillSpreadFactor] },
    { name: "Angular", category: 1, size: 1.1, position: [1.0 * skillSpreadFactor, -0.4 * skillSpreadFactor, -0.3 * skillSpreadFactor] },
    { name: "Next.js", category: 1, size: 1.0, position: [-1.3 * skillSpreadFactor, 0.6 * skillSpreadFactor, 0.6 * skillSpreadFactor] },
    { name: "Nuxt.js", category: 1, size: 1.0, position: [-0.6 * skillSpreadFactor, -1.3 * skillSpreadFactor, -1.1 * skillSpreadFactor] },
    { name: "Tailwind CSS", category: 1, size: 1.0, position: [0.6 * skillSpreadFactor, 1.0 * skillSpreadFactor, 0.7 * skillSpreadFactor] },
    { name: "Bootstrap", category: 1, size: 0.9, position: [-0.4 * skillSpreadFactor, -0.6 * skillSpreadFactor, -1.3 * skillSpreadFactor] },
    { name: "Spring Boot", category: 1, size: 1.1, position: [0.7 * skillSpreadFactor, -1.0 * skillSpreadFactor, -0.4 * skillSpreadFactor] },
    { name: "Node.js", category: 1, size: 1.2, position: [1.3 * skillSpreadFactor, 0.3 * skillSpreadFactor, -0.7 * skillSpreadFactor] },
    { name: "FastAPI", category: 1, size: 1.0, position: [1.1 * skillSpreadFactor, 1.1 * skillSpreadFactor, 0.3 * skillSpreadFactor] },
    { name: "NestJS", category: 1, size: 1.0, position: [-0.3 * skillSpreadFactor, -0.5 * skillSpreadFactor, 1.1 * skillSpreadFactor] },
    
    // Mobile Development (Category Index: 4) - Increased base offsets & spread
    { name: "Flutter", category: 4, size: 1.1, position: [-1.3 * skillSpreadFactor, -0.8 * skillSpreadFactor, 0.3 * skillSpreadFactor] },
    { name: "React Native", category: 4, size: 1.0, position: [-1.8 * skillSpreadFactor, 1.1 * skillSpreadFactor, -0.5 * skillSpreadFactor] },
    { name: "SwiftUI", category: 4, size: 1.0, position: [-2.3 * skillSpreadFactor, -1.0 * skillSpreadFactor, 0.6 * skillSpreadFactor] },
    
    // Data and AI (Category Index: 5) - Increased base offsets & spread
    { name: "TensorFlow", category: 5, size: 1.2, position: [0.8 * skillSpreadFactor, 1.3 * skillSpreadFactor, -0.8 * skillSpreadFactor] },
    { name: "PyTorch", category: 5, size: 1.1, position: [1.3 * skillSpreadFactor, 0.8 * skillSpreadFactor, 1.3 * skillSpreadFactor] },
    { name: "Apache Spark", category: 5, size: 1.0, position: [0.5 * skillSpreadFactor, 1.8 * skillSpreadFactor, 0.5 * skillSpreadFactor] },
    
    // Tools & Concepts (Category Index: 6) - Increased base offsets & spread
    { name: "Figma", category: 6, size: 1.0, position: [1.1 * skillSpreadFactor, -1.3 * skillSpreadFactor, 1.3 * skillSpreadFactor] },
    { name: "Postman", category: 6, size: 1.0, position: [1.8 * skillSpreadFactor, -1.8 * skillSpreadFactor, 1.8 * skillSpreadFactor] },
    
    // Databases (Category Index: 7) - Increased base offsets & spread
    { name: "MongoDB", category: 7, size: 1.0, position: [-1.3 * skillSpreadFactor, 0.8 * skillSpreadFactor, -1.3 * skillSpreadFactor] },
    { name: "PostgreSQL", category: 7, size: 1.0, position: [-1.6 * skillSpreadFactor, 1.1 * skillSpreadFactor, -1.0 * skillSpreadFactor] },
    { name: "Redis", category: 7, size: 0.9, position: [-1.4 * skillSpreadFactor, 0.5 * skillSpreadFactor, -1.5 * skillSpreadFactor] },
    { name: "Neo4j", category: 7, size: 0.9, position: [-1.8 * skillSpreadFactor, 0.3 * skillSpreadFactor, -0.8 * skillSpreadFactor] }
  ]
  
  const CategoryNode = ({ position, color, name }) => {
    if (name === '(Unused)') return null;
    
    return (
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <Html position={[0, 0.8, 0]} center>
          <div className="text-white text-center font-bold px-3 py-2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110" 
               style={{ 
                 backgroundColor: color,
                 backdropFilter: 'blur(10px)',
                 WebkitBackdropFilter: 'blur(10px)'
               }}>
            {name}
          </div>
        </Html>
      </group>
    )
  }
  
  const SkillNode = ({ position, color, size, name }) => {
    const isHovered = hoveredSkill === name
    
    return (
      <group position={position}>
        <mesh
          onPointerOver={() => setHoveredSkill(name)}
          onPointerOut={() => setHoveredSkill(null)}
        >
          <sphereGeometry args={[size * 0.2, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={isHovered ? 0.8 : 0.3}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        <Html position={[0, size * 0.3, 0]} center>
          <div className={`text-white text-xs text-center px-2 py-1 rounded-lg shadow-md transform transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} 
               style={{ 
                 backgroundColor: `${color}99`,
                 backdropFilter: 'blur(5px)',
                 WebkitBackdropFilter: 'blur(5px)'
               }}>
            {name}
          </div>
        </Html>
      </group>
    )
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-space-bg to-black text-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-purple-500">
          SKILLS GALAXY
        </h2>
        <p className="text-xl text-center mb-12 text-gray-300">
          Explore my technical universe
        </p>
        
        <div className="mt-10 h-[600px] rounded-xl overflow-hidden border-2 border-electric-blue/30 backdrop-blur-sm">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars 
              radius={100} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1}
            />
            
            {categories.map((category, i) => (
              <CategoryNode 
                key={`category-${i}`}
                position={category.position}
                color={category.color}
                name={category.name}
              />
            ))}
            
            {skills.map((skill, i) => (
              <SkillNode
                key={`skill-${i}`}
                position={[
                  categories[skill.category].position[0] + skill.position[0],
                  categories[skill.category].position[1] + skill.position[1],
                  categories[skill.category].position[2] + skill.position[2]
                ]}
                color={categories[skill.category].color}
                size={skill.size}
                name={skill.name}
              />
            ))}
            
            <OrbitControls 
              ref={controlsRef}
              enableZoom={true}
              enablePan={true}
              autoRotate
              autoRotateSpeed={0.5}
              minDistance={8}
              maxDistance={20}
            />
          </Canvas>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            <span className="inline-block mr-2">🖱️</span>
            Drag to rotate | Scroll to zoom
          </p>
        </div>
      </div>
    </section>
  )
}

export default SkillsGalaxy
