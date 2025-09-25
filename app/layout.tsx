import type React from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import MainWrapper from "./main-wrapper"

export const metadata: Metadata = {
  title: "Sonal Shah",
  description: "Data analyst and storyteller transforming complex data into clear insights through visualization, analysis, and machine learning.",
  keywords: "data analysis, data visualization, machine learning, tableau, python, analytics",
  authors: [{ name: "Sonal Shah" }],
  creator: "Sonal Shah",
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased text-gray-900 bg-white min-h-screen flex flex-col">
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  )
}
