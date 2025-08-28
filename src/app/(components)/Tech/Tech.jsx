
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

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 tron-border hover:tron-glow transition-all duration-300"
          >
            <h3 className="text-green-400 font-semibold mb-4 text-center border-b border-green-500/30 pb-2">
              [{category.toUpperCase()}]
            </h3>
            <div className="space-y-3">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-2 rounded border border-green-500/20 hover:border-green-400/40 hover:bg-green-500/5 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 relative">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span className="text-green-200 text-sm group-hover:text-green-100 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle animated border for the whole section */}
      <motion.div 
        className="absolute inset-0 border border-green-500/10 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
}
