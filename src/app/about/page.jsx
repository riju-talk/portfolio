"use client"

import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { personalInfo, publications, skillGroups } from "@/data/portfolio-data"

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell page-enter">
      <div className="page-wrap">
        <header className="topbar">
          <Link href="/" className="brand-mark">
            <span className="brand-dot" aria-hidden="true" />
            <span>{personalInfo.name}</span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/#experience">Experience</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#research">Research</Link>
            <Link href="/about" className="active">About</Link>
          </nav>
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
              <Link href="/#experience">Experience</Link>
              <Link href="/#work">Work</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#research">Research</Link>
              <Link href="/about">About</Link>
            </nav>
          )}
        </header>

        <main>
          <section className="about-hero">
            <Link href="/" className="back-link"><ArrowLeft size={14} strokeWidth={1.5} /> Back to the notebook</Link>
            <p className="section-label">About the practice</p>
            <h1>Research-minded. <em>System-aware.</em></h1>
            <p className="about-lede">
              I am {personalInfo.name}, a {personalInfo.title.toLowerCase()} who likes the stretch between an uncertain idea and a reliable implementation.
            </p>
          </section>

          <section className="about-copy resume-section">
            <div className="section-label">Working notes</div>
            <div className="section-content">
              {personalInfo.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="resume-section">
            <div className="section-label">Coordinates</div>
            <dl className="section-content data-list">
              <div><dt>Based in</dt><dd>{personalInfo.location.city}, {personalInfo.location.country}</dd></div>
              <div><dt>Focus</dt><dd>Software / ML / platform work</dd></div>
              <div><dt>Availability</dt><dd>Open to thoughtful opportunities</dd></div>
              <div><dt>Reach me</dt><dd>{personalInfo.contact.email}</dd></div>
            </dl>
          </section>

          <section id="research" className="resume-section">
            <div className="section-label">Publication</div>
            <div className="section-content">
              {publications.map((publication) => (
                <article className="publication-item" key={publication.key}>
                  <p className="publication-meta">{publication.label} · {publication.status}</p>
                  <h2>{publication.title}</h2>
                  <p>{publication.description}</p>
                  {publication.link && <a className="item-link" href={publication.link} target="_blank" rel="noreferrer">Open citation <ArrowUpRight size={13} /></a>}
                </article>
              ))}
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

          <section className="contact-section">
            <div>
              <div className="section-label">Open channel</div>
              <h2>Let&apos;s compare notes.</h2>
              <div className="social-links">
                <a href={personalInfo.contact.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
                <a href={`mailto:${personalInfo.contact.email}`}><Mail size={14} /> Email</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-meta">
          <span>{personalInfo.name} · {personalInfo.subtitle}</span>
          <span><Link href="/">Return home</Link></span>
        </footer>
      </div>
    </div>
  )
}