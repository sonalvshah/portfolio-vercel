import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CategorySwitcher } from "@/components/category-switcher"
import { ProjectGrid } from "@/components/project-grid"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategorySwitcher />
        <ProjectGrid />
      </div>
      <AboutSection />
    </div>
  )
}
