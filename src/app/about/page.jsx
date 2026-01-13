
"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, MapPin, Calendar, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollToTop from "../(components)/ScrollToTop/ScrollToTop"
import { personalInfo, experience, languages, skills, toolkit } from "@/data/portfolio-data"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Sidebar - Same as home page */}
          <aside className="bg-slate-900/70 rounded-xl border border-white/5 shadow-2xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-slate-800/70">
                  <Image src="/logo.png" alt="Profile" width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">{personalInfo.title}</p>
                  <h1 className="text-xl font-semibold text-white">{personalInfo.name}</h1>
                  <p className="text-xs text-white/60">{personalInfo.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5 border-b border-white/5">
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

            <div className="p-6 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Languages</p>
              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang) => (
                  <div key={lang.label} className="relative h-16 rounded-lg bg-slate-800/70 border border-white/5 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white/5 rounded-lg" style={{ clipPath: `inset(${100 - lang.value}% 0 0 0)` }} />
                    <span className="relative text-xs text-white/80">{lang.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-4 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Skills</p>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-1">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-white" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-3 border-b border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tooling</p>
              <ul className="space-y-2 text-sm text-white/70">
                {toolkit.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-white/20 text-sm text-white hover:bg-white/5 transition">
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {personalInfo.contact.email}</div>
              <div className="flex gap-3 pt-2 text-white/50">
                <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="hover:text-white"><Github className="h-4 w-4" /></a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-6">
            <nav className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
              <Link href="/" className="inline-flex items-center hover:text-white transition">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Back
              </Link>
              <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/about" className="text-white">About</Link>
              </div>
            </nav>

            {/* About Section */}
            <motion.section {...fadeIn} className="bg-slate-900/70 rounded-xl border border-white/5 shadow-2xl p-6 lg:p-8">
              <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="border-l-2 border-white/10 pl-4">{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center text-white/60 bg-slate-800/60 px-4 py-2 rounded text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {personalInfo.location.city}, {personalInfo.location.country}
                </div>
                <div className="flex items-center text-white/60 bg-slate-800/60 px-4 py-2 rounded text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Open to opportunities
                </div>
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section {...fadeIn} className="bg-slate-900/70 rounded-xl border border-white/5 shadow-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
                <div className="h-px flex-1 ml-4 bg-white/10" />
              </div>
              <div className="space-y-4">
                {experience.map((job) => (
                  <div key={job.key} className="rounded-lg bg-slate-800/60 border border-white/5 p-5 hover:border-white/15 transition">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className="text-base font-semibold text-white">{job.title}</h4>
                        <p className="text-sm text-white/60 mt-1">{job.company}</p>
                        <p className="text-xs text-white/50 mt-1 italic">{job.name}</p>
                      </div>
                      <span className="text-xs text-white/50 bg-slate-700/50 px-3 py-1 rounded mt-2 md:mt-0">{job.period}</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed border-l-2 border-white/10 pl-4">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section {...fadeIn} className="bg-slate-900/70 rounded-xl border border-white/5 shadow-2xl p-6 lg:p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-sm text-white/60 mb-6 max-w-2xl mx-auto">
                I'm always interested in challenging opportunities in software engineering, machine learning, and DevOps. 
                Let's discuss how we can collaborate to build innovative solutions.
              </p>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-slate-900 font-semibold text-sm tracking-wide hover:bg-slate-100 transition"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </motion.section>
          </main>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
