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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {categories.map((category, categoryIndex) => {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded p-5 hover:border-glass-blue/20 transition-all duration-300"
            >
              <h3 className="text-glass-blue/70 font-light text-xs tracking-widest mb-5 text-center border-b border-glass-blue/10 pb-3 uppercase">
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
                      className="flex items-center gap-3 p-2 rounded border border-glass-blue/5 hover:border-glass-green/15 hover:bg-glass-blue/5 transition-all duration-300 group"
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
                      <span className="text-glass-slate/50 text-xs group-hover:text-glass-slate/70 transition-colors duration-300 font-light">
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
