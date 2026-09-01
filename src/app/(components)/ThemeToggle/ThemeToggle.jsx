"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark")
  }, [])

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", next)
    try {
      localStorage.setItem("theme", next)
    } catch (e) {
      /* storage unavailable. theme still applies for this session */
    }
    setTheme(next)
  }

  const label = `Switch to ${theme === "light" ? "dark" : "light"} mode`

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "light"
        ? <Moon size={15} strokeWidth={1.5} />
        : <Sun size={15} strokeWidth={1.5} />}
    </button>
  )
}
