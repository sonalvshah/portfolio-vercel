import { Hero } from "@/app/components/hero"
import { ProjectSection } from "@/app/components/project-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectSection />
    </div>
  )
}

