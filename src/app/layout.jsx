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
  title: "Rijusmit Biswas — Software & ML Engineer",
  description:
    "Rijusmit Biswas is a software and machine learning engineer building the layer between research prototypes and dependable developer systems.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="view-transition" content="same-origin" />
      </head>
      <body className={`${display.variable} ${manrope.variable}`}>{children}</body>
    </html>
  )
}
