"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechStack() {
  const technologies = [
    { name: "Python", icon: "/python.svg", category: "Language" },
    { name: "JavaScript", icon: "/js.svg", category: "Language" },
    { name: "TypeScript", icon: "/ts.svg", category: "Language" },
    { name: "React", icon: "/reactjs.svg", category: "Fullstack" },
    { name: "Next.js", icon: "/nextjs.svg", category: "Fullstack" },
    { name: "Tailwind CSS", icon: "/tailwindcss.svg", category: "Fullstack" },
    { name: "R", icon: "/r.svg", category: "Language" },
    { name: "Go", icon: "/go.svg", category: "Language" },
    { name: "Java", icon: "/java.svg", category: "Language" },
    { name: "C++", icon: "/cpp.svg", category: "Language" },
    { name: "Docker", icon: "/docker.svg", category: "DevOps" },
    { name: "Kubernetes", icon: "/kubernetes.svg", category: "DevOps" },
    { name: "PostgreSQL", icon: "/pgsql.svg", category: "Database" },
    { name: "MongoDB", icon: "/mongo.svg", category: "Database" },
    { name: "Redis", icon: "/redis.svg", category: "Database" },
    { name: "PyTorch", icon: "/pytorch.svg", category: "ML/AI" },
    { name: "TensorFlow", icon: "/tensorflow.svg", category: "ML/AI" },
    { name: "Flask", icon: "/flask.svg", category: "Fullstack" },
    { name: "Express", icon: "/express.svg", category: "Fullstack" },
    { name: "FastAPI", icon: "/fastapi.svg", category: "Fullstack"},
    { name: "MySQL", icon: "/mysql.svg", category: "Database"},
    { name: "Firebase", icon: "/firebase.svg", category: "Database"},
    { name: "Unsloth", icon: "/unsloth.svg", category: "ML/AI"},
    { name: "OpenCV", icon: "/opencv.svg", category: "ML/AI"},
    { name: "Huggingface", icon: "/huggingface.svg", category: "ML/AI"},
    { name: "ElasticSearch", icon: "/elasticsearch.svg", category: "Database"},
    { name: "Github Actions", icon: "/github.svg", category: "DevOps"},
    { name: "Git", icon: "/git.svg", category: "DevOps"},
    { name: "GitLab", icon: "/gitlab.svg", category: "DevOps"},
    { name: "LangSmith", icon: "/langsmith.svg", category: "ML/AI"},
    { name: "LangChain", icon: "/langchain.svg", category: "ML/AI"}
  ]

  const categories = ["Language", "Fullstack", "DevOps", "Database", "ML/AI"]

  const categoryColors = {
    "Language": "olive",
    "Fullstack": "olive",
    "Backend": "olive",
    "DevOps": "olive",
    "Database": "olive",
    "ML/AI": "olive"
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, categoryIndex) => {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded p-5 transition-all duration-300"
            >
              <h3 className="text-olive-300/75 font-light text-xs tracking-widest mb-5 text-center border-b border-olive-500/25 pb-3 uppercase">
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
                      className="flex items-center gap-3 p-2 rounded tech-badge-olive transition-all duration-300 group"
                    >
                      <div className="w-5 h-5 relative">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={20}
                          height={20}
                          className="transition-opacity duration-300"
                        />
                      </div>
                      <span className="text-olive-300/60 text-xs group-hover:text-olive-300/80 transition-colors duration-300 font-light">
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
