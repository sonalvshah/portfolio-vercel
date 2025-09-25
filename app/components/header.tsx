"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const handleContactClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "shah5sv@mail.uc.edu"
    
    try {
      await navigator.clipboard.writeText(email)
      // Show confirmation that email was copied
      const originalText = (e.target as HTMLElement).textContent
      ;(e.target as HTMLElement).textContent = "Email Copied!"
      setTimeout(() => {
        ;(e.target as HTMLElement).textContent = originalText
      }, 2000)
      
      // Also offer to open mail app
      setTimeout(() => {
        if (confirm("Email copied to clipboard! Would you like to open your mail app?")) {
          window.location.href = `mailto:${email}`
        }
      }, 500)
    } catch (err) {
      // Fallback if clipboard API fails
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Name
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 tracking-tight"
          >
            Sonal Shah
          </Link> */}

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/" 
                  ? "text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <button
              onClick={handleContactClick}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}


