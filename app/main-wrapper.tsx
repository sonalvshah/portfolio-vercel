"use client"

import { usePathname } from "next/navigation"
import type React from "react"

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Consistent padding for all pages
  const mainPadding = pathname === "/about" ? "pt-20 flex-1" : "pt-16 flex-1"

  return <main className={mainPadding}>{children}</main>
}
