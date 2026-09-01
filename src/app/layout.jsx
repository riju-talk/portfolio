import React from "react"
import { Instrument_Serif, Manrope } from "next/font/google"
import "./globals.css"

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Rijusmit Biswas, Software and Machine Learning Engineer",
  description:
    "Rijusmit Biswas is a software and machine learning engineer. He builds full stack products and puts machine learning to work in ways people can rely on.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Apply the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="view-transition" content="same-origin" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
