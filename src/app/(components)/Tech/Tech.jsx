"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechStack() {
  const technologies = [
    { name: "Python", icon: "/python.svg", category: "Backend" },
    { name: "JavaScript", icon: "/js.svg", category: "Frontend" },
    { name: "TypeScript", icon: "/ts.svg", category: "Frontend" },
    { name: "React", icon: "/reactjs.svg", category: "Frontend" },
    { name: "Next.js", icon: "/nextjs.svg", category: "Frontend" },
    { name: "Go", icon: "/go.svg", category: "Backend" },
    { name: "Java", icon: "/java.svg", category: "Backend" },
    { name: "C++", icon: "/cpp.svg", category: "Backend" },
    { name: "Docker", icon: "/docker.svg", category: "DevOps" },
    { name: "Kubernetes", icon: "/kubernetes.svg", category: "DevOps" },
    { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
    { name: "MongoDB", icon: "/mongo.svg", category: "Database" },
    { name: "Redis", icon: "/redis.svg", category: "Database" },
    { name: "PyTorch", icon: "/pytorch.svg", category: "ML/AI" },
    { name: "TensorFlow", icon: "/tensorflow.svg", category: "ML/AI" },
    { name: "Flask", icon: "/flask.svg", category: "Backend" },
  ]

  const categories = ["Frontend", "Backend", "DevOps", "Database", "ML/AI"]

  const categoryColors = {
    "Frontend": "navy",
    "Backend": "olive",
    "DevOps": "navy",
    "Database": "olive",
    "ML/AI": "navy"
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {categories.map((category, categoryIndex) => {
          const colorType = categoryColors[category]
          const borderColor = colorType === "navy" ? "border-navy-400/10" : "border-olive-500/10"
          const textColor = colorType === "navy" ? "text-navy-300/70" : "text-olive-400/70"
          const hoverBorder = colorType === "navy" ? "hover:border-navy-400/20" : "hover:border-olive-500/20"
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel rounded p-5 ${hoverBorder} transition-all duration-300`}
            >
              <h3 className={`${textColor} font-light text-xs tracking-widest mb-5 text-center border-b ${borderColor} pb-3 uppercase`}>
                {category}
              </h3>
              <div className="space-y-3">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-3 p-2 rounded border ${borderColor} ${hoverBorder} hover:bg-navy-400/5 transition-all duration-300 group`}
                    >
                      <div className="w-5 h-5 relative">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="filter brightness-0 invert opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-navy-200/50 text-xs group-hover:text-navy-200/70 transition-colors duration-300 font-light">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
