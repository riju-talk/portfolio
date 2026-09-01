"use client"

import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "./(components)/ThemeToggle/ThemeToggle"
import {
  experience,
  internships,
  personalInfo,
  projects,
  publications,
  skillGroups,
  stats,
} from "@/data/portfolio-data"

function SiteNavigation({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="topbar">
      <Link href="/" className="brand-mark" onClick={closeMenu}>
        <span className="brand-dot" aria-hidden="true" />
        <span>{personalInfo.name}</span>
      </Link>
      <div className="topbar-actions">
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#research">Research</a>
          <Link href="/about">About</Link>
        </nav>
        <ThemeToggle />
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#research" onClick={closeMenu}>Research</a>
            <Link href="/about" onClick={closeMenu}>About</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={personalInfo.contact.github} target="_blank" rel="noreferrer">
        <Github size={14} strokeWidth={1.6} /> GitHub
      </a>
      <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer">
        <Linkedin size={14} strokeWidth={1.6} /> LinkedIn
      </a>
      <a href={`mailto:${personalInfo.contact.email}`}>
        <Mail size={14} strokeWidth={1.6} /> Email
      </a>
    </div>
  )
}

function ExperienceItem({ item }) {
  const highlights = item.highlights || [item.description]

  return (
    <article className="experience-item reveal">
      <div className="experience-heading">
        <div>
          <h3>{item.title} <span>· {item.company}</span></h3>
          <p>{item.name}</p>
        </div>
        <time>{item.period}</time>
      </div>
      <ul className="experience-highlights">
        {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <span className="experience-kind">{item.kind}</span>
    </article>
  )
}

function ProjectItem({ project, index }) {
  const link = project.live || project.resource || project.github
  const linkLabel = project.live ? "Live" : project.resource ? "Notes" : "Code"

  return (
    <article className="project-item reveal">
      <span className="item-index">0{index + 1}</span>
      <div className="project-copy">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <span>{project.type}</span>
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </div>
      <a className="item-link" href={link} target="_blank" rel="noreferrer">
        {linkLabel} <ArrowUpRight size={13} strokeWidth={1.5} />
      </a>
    </article>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell page-enter">
      <div className="page-wrap">
        <SiteNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <section className="resume-hero">
            <div className="profile-line reveal">
              <div className="profile-avatar" aria-hidden="true">RB</div>
              <div>
                <h1>{personalInfo.name}</h1>
                <p>{personalInfo.title} — {personalInfo.subtitle}.</p>
                <p>{personalInfo.location.city}, {personalInfo.location.country}.</p>
              </div>
            </div>
            <p className="hero-intro reveal delay-1">
              {personalInfo.tagline} That runs from the React screens through the API layer down to the database and the infrastructure that keeps it running — plus machine learning in production when the work calls for it.
            </p>
            <div className="reveal delay-2"><SocialLinks /></div>
          </section>

          <section className="metrics reveal" aria-label="At a glance">
            {stats.map((stat) => (
              <div className="metric" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>

          <section id="experience" className="resume-section">
            <div className="section-label">Experience</div>
            <div className="section-content">
              {experience.map((item) => <ExperienceItem key={item.key} item={item} />)}
            </div>
          </section>

          <section id="internships" className="resume-section">
            <div className="section-label">Internships</div>
            <div className="section-content">
              <p className="section-note">Recent engineering and research internships.</p>
              {internships.map((item) => <ExperienceItem key={item.key} item={item} />)}
            </div>
          </section>

          <section id="work" className="resume-section">
            <div className="section-label">Selected work</div>
            <div className="section-content">
              {projects.map((project, index) => <ProjectItem key={project.title} project={project} index={index} />)}
            </div>
          </section>

          <section id="skills" className="resume-section">
            <div className="section-label">Skills</div>
            <div className="section-content skills-list">
              {skillGroups.map((group) => (
                <div className="skill-row" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="research" className="resume-section">
            <div className="section-label">Publication</div>
            <div className="section-content">
              {publications.map((publication) => (
                <article className="publication-item reveal" key={publication.key}>
                  <div>
                    <p className="publication-meta">{publication.label} · {publication.status}</p>
                    <h3>{publication.title}</h3>
                    <p>{publication.description}</p>
                    {publication.link && (
                      <a className="item-link" href={publication.link} target="_blank" rel="noreferrer">
                        Read publication <ArrowUpRight size={13} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div>
              <div className="section-label">Contact</div>
              <h2>Let&apos;s build something useful.</h2>
              <p>For thoughtful collaborations, difficult systems questions, or a good research lead, email is the most direct route.</p>
            </div>
            <a className="contact-link" href={`mailto:${personalInfo.contact.email}`}>
              {personalInfo.contact.email} <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </section>
        </main>

        <footer className="footer-meta">
          <span>{personalInfo.name} · {personalInfo.location.city}</span>
          <span>Living document / 2026</span>
        </footer>
      </div>
    </div>
  )
}