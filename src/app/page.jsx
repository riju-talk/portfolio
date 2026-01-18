"use client"

import { ArrowRight, Download, Github, Mail, MapPin, Phone, Linkedin, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import TechStack from "./(components)/Tech/Tech"
import ProjectCard from "./(components)/Repo/Repo"
import ScrollToTop from "./(components)/ScrollToTop/ScrollToTop"
import { personalInfo, languages, skills, toolkit, projects, stats } from "@/data/portfolio-data"

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-teal-950 text-emerald-100 page-enter">
      {/* Mobile Sidebar Toggle Button - Floating Action Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 left-6 z-[9999] bg-emerald-400 text-teal-950 p-3 rounded-full shadow-2xl hover:bg-emerald-300 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center lg:hidden"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 sm:gap-6 items-start">
          {/* Sidebar */}
          <aside className={`bg-emerald-900/70 rounded-xl border border-white/5 shadow-2xl flex flex-col overflow-hidden sidebar-enter lg:sticky lg:top-8 ${sidebarOpen ? 'fixed inset-0 z-[9998] lg:z-auto lg:block' : 'hidden lg:block'}`}>
            <div className="p-4 sm:p-6 lg:p-8 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div className="gap-8">
                  <h1 className="text-2xl font-semibold text-white my-2">{personalInfo.name}</h1>
                  <p className="text-xs text-white/60">{personalInfo.subtitle}</p>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-white/60 hover:text-white transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6 border-b border-white/5">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="text-white/50">Residence:</span>
                <span>{personalInfo.location.country}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="text-white/50">City:</span>
                <span>{personalInfo.location.city}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="text-white/50">Age:</span>
                <span>{personalInfo.location.age}</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3 sm:mb-4">Languages</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {languages.map((lang) => (
                  <div key={lang.label} className="relative h-14 sm:h-16 rounded-lg bg-teal-950 border border-cyan-500/10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-lg" style={{ clipPath: `inset(${100 - lang.value}% 0 0 0)` }} />
                    <span className="relative text-xs text-white/80">{lang.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 space-y-6 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Skills</p>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-1">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-teal-950">
                      <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tooling</p>
              <ul className="space-y-2 text-sm text-white/70">
                {toolkit.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-cyan-500/30 text-sm text-cyan-300 hover:bg-cyan-500/10 transition">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 lg:gap-5 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {personalInfo.contact.email}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {personalInfo.contact.phone}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {personalInfo.location.city}, {personalInfo.location.country}</div>
              <div className="flex gap-3 pt-2 text-cyan-400/70">
                <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300"><Github className="h-4 w-4" /></a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6 main-enter">
            <nav className="flex items-center justify-end gap-4 sm:gap-6 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-300/60">
              <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
              <Link href="/about" className="text-emerald-300 hover:text-emerald-200 transition">About</Link>
            </nav>

            <section className="section-enter bg-emerald-900/70 rounded-xl border border-white/5 shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 items-center">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/60 mb-2">Hello There,</p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">{personalInfo.tagline}</h2>
                  <Link href="/about" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-emerald-400 text-teal-950 font-semibold text-sm tracking-wide hover:bg-emerald-300 transition touch-manipulation">
                    Explore More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </section>

            <section className="section-enter bg-teal-950/90 rounded-xl border border-cyan-500/20 shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Tech Stack</h3>
                <div className="h-px flex-1 ml-3 sm:ml-4 bg-cyan-500/30" />
              </div>
              <TechStack />
            </section>

            <section className="section-enter bg-teal-950/90 rounded-xl border border-cyan-500/20 shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Featured Projects</h3>
                <div className="h-px flex-1 ml-3 sm:ml-4 bg-cyan-500/30" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md border border-cyan-500/30 text-sm text-cyan-300 hover:bg-cyan-500/10 transition touch-manipulation"
                >
                  <Github className="h-4 w-4" />
                  View All Projects
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
