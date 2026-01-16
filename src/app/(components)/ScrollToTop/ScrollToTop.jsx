"use client"

import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-emerald-400 text-teal-950 hover:bg-emerald-300 shadow-2xl border border-emerald-400/30 transition-all duration-300 hover:scale-110"
      style={{ position: 'fixed' }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </motion.button>
  )
}
