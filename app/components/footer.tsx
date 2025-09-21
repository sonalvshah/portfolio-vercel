"use client"

import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Footer() {
  return (
    <footer id="contact" className={`bg-black text-white py-16 px-6 mt-20 ${inter.className}`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left column - Heading */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Say hello!</h2>
        </div>

        {/* Middle column - Work */}
        <div className="md:pl-12">
          <h3 className="font-semibold mb-4">Work</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="https://github.com/sonalvshah" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
            <li><Link href="https://public.tableau.com/app/profile/shahsv/vizzes" target="_blank" rel="noopener noreferrer">Tableau</Link></li>
            <li><Link href="https://medium.com/@shahsv28" target="_blank" rel="noopener noreferrer">Medium</Link></li>
          </ul>
        </div>

        {/* Right column - Projects */}
        <div>
          <h3 className="font-semibold mb-4">Reach Me</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="mailto:shah5sv@mail.uc.edu">Email</Link></li>
            <li><Link href="https://www.linkedin.com/in/sonalshah2807/" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Sonal Shah</p>
      </div>
    </footer>
  )
}
