import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rijusmit Biswas - DevOps & MLOps ",
  description:
    "DevOps & MLOps Engineer building scalable, intelligent infrastructure. Specializing in cloud automation, ML pipelines, and full-stack solutions.",
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
      <body className={`${inter.className} bg-teal-950 text-white`}>{children}</body>
    </html>
  )
}
