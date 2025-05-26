import { motion } from "framer-motion";

export default function TechStack() {
  const languages = [
    {
      name: "Python",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          {/* [Python SVG paths go here] */}
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          {/* [JavaScript SVG paths go here] */}
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          {/* [TypeScript SVG paths go here] */}
        </svg>
      ),
    },
    {
      name: "Go",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          {/* [Go SVG path continues here if truncated] */}
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.name}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {lang.icon}
            <p className="mt-2 text-sm font-medium">{lang.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
