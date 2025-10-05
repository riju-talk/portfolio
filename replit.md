# Overview

This is a personal portfolio website for Rijusmit Biswas, a Machine Learning and Full Stack Developer. The website showcases professional experience, projects, and provides contact information. Built as a modern single-page application with smooth animations and a distinctive "Tron-inspired" aesthetic featuring green/cyan neon glows and dark backgrounds.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 15.3.2 with App Router**: Modern React framework chosen for its server-side rendering capabilities, file-based routing, and excellent developer experience. The App Router provides improved routing patterns and layouts.
- **React 19**: Latest version for component-based UI development with improved performance and concurrent features.
- **TypeScript**: Type safety enabled through jsconfig.json path aliases (`@/*` pointing to `./src/*`).

## Styling & Animation
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development. Custom theme extensions include:
  - Custom color palette: `primary`, `tron`, and extended `gray` colors
  - Custom animations: `fade-in`, `slide-up`, `pulse-green`, `glow`
  - Tron-inspired design system with neon green/cyan aesthetic
- **Framer Motion / Motion**: Advanced animation library (v12.12.1) for smooth, physics-based animations and transitions.
- **React Spring**: Additional animation library for spring-based animations, providing alternative animation patterns.
- **Custom CSS**: Global styles include scrollbar customization, selection styling, and Tron-themed utility classes (`.tron-border`, `.tron-glow`, `.tron-grid`).

## UI Components & Icons
- **Lucide React**: Modern icon library for consistent, scalable icons throughout the interface.
- **Ant Design Next.js Registry**: Component integration for potential Ant Design components in Next.js environment.

## Development Tools
- **Leva**: Interactive controls library (v0.10.0) for debugging and tweaking values during development.
- **Easing Coordinates**: Utility for generating smooth easing functions for custom animations.

## Design System
The application follows a "Tron-inspired" aesthetic with:
- Dark gradient backgrounds blending multiple dark shades
- Neon green (#22c55e) and cyan (#06b6d4) accent colors
- Glowing borders and shadow effects
- Custom scrollbar with gradient effects
- Grid overlays for futuristic visual effects

## Routing Structure
- App Router pattern with source code in `src/app/`
- Static assets served from `public/` directory
- Media assets stored in `media/` directory

# External Dependencies

## Hosting & Deployment
- **Azure Static Web Apps**: Primary deployment platform with GitHub Actions workflow configured (`.github/workflows/`)
- **Vercel**: Secondary deployment platform for Next.js applications

## Package Management
- **npm**: Package manager with lockfile version 3

## Development Server
- Custom port configuration: Development and production servers run on port 5000
- Network accessibility: Bound to `0.0.0.0` for external access

## Build Tools
- **ESLint 9**: Code linting with Next.js-specific configuration
- **PostCSS**: CSS processing via `@tailwindcss/postcss` v4

No database, authentication system, or backend API is currently implemented. The portfolio is a static/client-side application with potential for server-side rendering through Next.js.