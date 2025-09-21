"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { Lexend_Tera } from "next/font/google"

//const lexendTera = Lexend_Tera({
//  subsets: ["latin"],
//  weight: ["400", "700"], // 400 = normal, 700 = bold
//})

export function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex justify-end">
        <nav 
          className="flex items-center gap-10 py-4 text-base tracking-wider text-gray-800"
        >
          {/* Work → always goes to home */}
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/" ? "font-bold" : "font-normal hover:text-gray-600"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === "/about"
                ? "font-bold"
                : "font-normal hover:text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={`transition-colors ${
              pathname === "#contact"
                ? "font-bold"
                : "font-normal hover:text-gray-600"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}


