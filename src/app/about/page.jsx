
"use client"

import { ArrowLeft, Download, MapPin, Calendar, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import ScrollToTop from "../(components)/ScrollToTop/ScrollToTop"
import { personalInfo, experience, languages, skills, toolkit } from "@/data/portfolio-data"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-teal-950 text-emerald-100 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 sm:gap-6">
          {/* Sidebar */}
          <aside className="bg-emerald-900/70 rounded-xl border border-white/5 shadow-2xl flex flex-col overflow-hidden sidebar-enter">
            <div className="p-4 sm:p-6 lg:p-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-xl font-semibold text-white my-2">{personalInfo.name}</h1>
                  <p className="text-xs text-white/60">{personalInfo.subtitle}</p>
                </div>
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
            <nav className="flex items-center justify-between text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-300/60">
              <button 
                onClick={() => router.back()} 
                className="inline-flex items-center hover:text-cyan-300 transition touch-manipulation cursor-pointer"
              >
                <ArrowLeft className="mr-2 h-3 w-3" />
                Back
              </button>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
                <Link href="/about" className="text-emerald-300 transition">About</Link>
              </div>
            </nav>

            {/* About Section */}
            <section className="section-enter bg-teal-900/70 rounded-xl border border-cyan-500/10 shadow-2xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-100 mb-4 sm:mb-6">About Me</h2>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/70 leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="border-l-2 border-cyan-500/30 pl-4">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                <div className="flex items-center text-cyan-300/80 bg-teal-950/60 border border-cyan-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {personalInfo.location.city}, {personalInfo.location.country}
                </div>
                <div className="flex items-center text-cyan-300/80 bg-teal-950/60 border border-cyan-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="section-enter bg-teal-950/90 rounded-xl border border-cyan-500/20 shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Experience</h3>
                <div className="h-px flex-1 ml-3 sm:ml-4 bg-cyan-500/30" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {experience.map((job) => (
                  <div key={job.key} className="rounded-lg bg-teal-950/80 border border-emerald-500/20 p-4 sm:p-5 hover:border-emerald-400/40 transition">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 sm:mb-3">
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-white">{job.title}</h4>
                        <p className="text-xs sm:text-sm text-white/80 mt-1">{job.company}</p>
                        <p className="text-xs text-white/70 mt-1 italic">{job.name}</p>
                      </div>
                      <span className="text-xs text-emerald-200 bg-teal-900/60 border border-emerald-500/20 px-2 sm:px-3 py-1 rounded mt-2 md:mt-0 inline-block">{job.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed border-l-2 border-emerald-500/40 pl-3 sm:pl-4">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="section-enter bg-teal-950/90 rounded-xl border border-cyan-500/20 shadow-2xl p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Let's Connect</h3>
              <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto">
                I'm always interested in challenging opportunities in software engineering, machine learning, and DevOps. 
                Let's discuss how we can collaborate to build innovative solutions.
              </p>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-emerald-400 text-teal-950 font-semibold text-sm tracking-wide hover:bg-emerald-300 transition touch-manipulation"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </section>
          </main>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
