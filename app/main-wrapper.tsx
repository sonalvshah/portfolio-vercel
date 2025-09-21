"use client"

import { usePathname } from "next/navigation"
import type React from "react"

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Default padding
  let mainPadding = "pt-20"

  // Smaller padding on About page
  if (pathname === "/about") {
    mainPadding = "pt-5"
  }

  return <main className={mainPadding}>{children}</main>
}
