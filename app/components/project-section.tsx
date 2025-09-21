"use client"

import { useState } from "react"
import { CategorySwitcher } from "./category-switcher"
import { ProjectGrid } from "./project-grid"

export function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section id = "projects" className="max-w-6xl mx-auto px-6 mt-30">
      {/* Section Heading */}
      <h2 className="text-4xl sm:text-4xl font-normal text-gray-900 text-center">
        A collection of my work
      </h2>
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <CategorySwitcher active={activeCategory} setActive={setActiveCategory} />
      <ProjectGrid activeCategory={activeCategory} />
    </div>
    </section>
  )
}

