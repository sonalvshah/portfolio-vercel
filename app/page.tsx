import { Header } from "@/app/components/header"
import { Hero } from "@/app/components/hero"
import { ProjectSection } from "@/app/components/project-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ONE wrapper for both header + hero */}
      <section
        className="relative w-screen overflow-hidden bg-cover bg-center ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
        style={{ backgroundImage: "url('/hero.png')" }}  // your image
      >
        <Header />
        <Hero />
      </section>
      <ProjectSection />
        {/* 👈 this already contains CategorySwitcher + ProjectGrid */}
      </div>
  )
}

