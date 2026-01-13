# Portfolio Data Configuration Guide

This file explains how to easily update your portfolio content without touching the code.

## 📝 Edit Portfolio Content

All portfolio content is centralized in [`portfolio-data.js`](./portfolio-data.js).

### Personal Information

Edit the `personalInfo` object to update your basic details:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title", // e.g., "Software & ML Engineer"
  subtitle: "Your Subtitle", // e.g., "Full Stack Development"
  location: {
    country: "Your Country",
    city: "Your City",
    age: "Your Age"
  },
  contact: {
    email: "your.email@example.com",
    phone: "+XX (XXX) XXX-XXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
  tagline: "Your tagline or mission statement",
  bio: [
    "First paragraph of your bio...",
    "Second paragraph...",
    "Third paragraph..."
  ]
}
```

### Languages

Update spoken/programming languages with proficiency levels (0-100):

```javascript
export const languages = [
  { label: "English", value: 100 },
  { label: "Spanish", value: 85 }
]
```

### Skills

Update your technical skills with proficiency levels (0-100):

```javascript
export const skills = [
  { label: "Python", value: 95 },
  { label: "JavaScript", value: 88 }
]
```

### Toolkit

Add tools, frameworks, or methodologies you're familiar with:

```javascript
export const toolkit = [
  "PyTorch, TensorFlow",
  "Docker, Kubernetes",
  "Git, GitHub Actions"
]
```

### Tech Stack

Update your technology stack. Each item needs:
- `name`: Technology name
- `icon`: Path to icon (must exist in `/public/`)
- `category`: One of: "Language", "Full Stack", "DevOps", "Database", "ML/AI"

```javascript
export const techStack = [
  { name: "Python", icon: "/python.svg", category: "Language" },
  { name: "React", icon: "/reactjs.svg", category: "Full Stack" }
]
```

**Note:** Make sure icon files exist in the `/public/` folder.

### Projects

Add or update your featured projects:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Brief description of the project...",
    tech: ["Python", "React", "Docker"], // Technologies used
    github: "https://github.com/yourusername/repo",
    live: "#", // Live demo URL or "#" if not available
    featured: true // Show "FEATURED" badge
  }
]
```

### Experience

Add your work experience, research, or internships:

```javascript
export const experience = [
  {
    key: 1, // Unique identifier
    title: "Job Title",
    company: "Company Name",
    name: "Project or Role Description",
    period: "2024", // Year or date range
    description: "Detailed description of your work and achievements..."
  }
]
```

### Stats

Update the statistics shown on your homepage:

```javascript
export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies", value: "30+" },
  { label: "Research Papers", value: "2" }
]
```

## 🎨 Adding New Icons

1. Download SVG icons for technologies
2. Place them in the `/public/` folder
3. Reference them in `techStack` with the path `/filename.svg`

## 🔄 After Making Changes

1. Save the `portfolio-data.js` file
2. The changes will automatically reflect on your portfolio
3. Refresh your browser to see updates

## 📂 File Structure

```
src/
  data/
    portfolio-data.js  ← Edit this file
    README.md          ← You are here
  app/
    page.jsx           ← Home page (uses data from portfolio-data.js)
    about/
      page.jsx         ← About page (uses data from portfolio-data.js)
```

## 💡 Tips

- Keep descriptions concise and impactful
- Use consistent formatting for dates (e.g., "2024" or "Jan 2024")
- Test your changes locally before deploying
- Maintain consistent icon sizes (SVG format recommended)
- Update GitHub/LinkedIn links with your actual profiles

## 🐛 Troubleshooting

**Icons not showing?**
- Check if the icon file exists in `/public/`
- Verify the path starts with `/` (e.g., `/python.svg`)
- Ensure the file is in SVG format

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Verify JavaScript syntax in `portfolio-data.js`

---

For questions or issues, refer to the main project documentation.
