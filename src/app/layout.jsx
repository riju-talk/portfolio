import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rijusmit Biswas - DevOps & MLOps ",
  description:
    "DevOps & MLOps Engineer building scalable, intelligent infrastructure. Specializing in cloud automation, ML pipelines, and full-stack solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>{children}</body>
    </html>
  )
}
