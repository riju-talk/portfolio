import { motion } from "framer-motion";

export default function TechStack() {
  // Grouped in dynamic sizing for visual interest
  const techGroups = [
    [
      { name: "Python", iconPath: "/python.svg" },
        { name: "JavaScript", iconPath: "/js.svg" },
        { name: "TypeScript", iconPath: "/ts.svg" },
        { name: "Go", iconPath: "/go.svg" },
    ],
    [
      { name: "C", iconPath: "/c.svg" },
        { name: "C++", iconPath: "/cpp.svg" },
        { name: "Java", iconPath: "/java.svg" },
        { name: "Dart", iconPath: "/dart.svg" },
        { name: "R", iconPath: "/r.svg" },
    ],
    [
      { name: "Next.js", iconPath: "/nextjs.svg" },
        { name: "React.js", iconPath: "/reactjs.svg" },
        { name: "Remix.js", iconPath: "/remix.svg" },
        { name: "PyTorch", iconPath: "/pytorch.svg" },
        { name: "TensorFlow", iconPath: "/tensorflow.svg" },
    ],
    [
      { name: "MongoDB", iconPath: "/mongo.svg" },
        { name: "MySQL", iconPath: "/mysql.svg" },
        { name: "PostgreSQL", iconPath: "/pgsql.svg" },
        { name: "Redis", iconPath: "/redis.svg" },
    ],
    [
      { name: "Docker", iconPath: "/docker.svg" },
        { name: "Kubernetes", iconPath: "/kubernetes.svg" },
        { name: "GitHub", iconPath: "/github.svg" },
    ]
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      
      <div className="space-y-6">
        {techGroups.map((group, groupIdx) => (
          <motion.div 
            key={groupIdx}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: groupIdx * 0.1 }}
          >
            {group.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="flex items-center px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 14px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: groupIdx * 0.15 + idx * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <img 
                  src={tech.iconPath} 
                  alt={tech.name} 
                  className="w-6 h-6 mr-3 object-contain filter" 
                />
                <span className="text-white/90 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Subtle animated border for the whole section */}
      <motion.div 
        className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
}