import type React from "react"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Source_Sans_3, Lexend_Tera } from "next/font/google"
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import MainWrapper from "./main-wrapper"

export const metadata: Metadata = {
  title: "Sonal's Portfolio",
  description: "Analytics Portfolio by Sonal Shah",
  generator: "v0.app",
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sourcesans",
})

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexendtera",
})

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${sourceSans.variable} ${lexendTera.variable} ${workSans.variable} ${playfair.variable} font-sans`}
      >
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  )
}
