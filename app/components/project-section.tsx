"use client"

import { useState } from "react"
import { CategorySwitcher } from "./category-switcher"
import { ProjectGrid } from "./project-grid"

export function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section id="projects" className="py-20 bg-white min-h-[800px] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            a collection of my work
          </h2>
          {/*<p className="text-gray-600 max-w-2xl mx-auto">
            A collection of data analysis, visualization, and machine learning projects
          </p> */}
        </div>

        <CategorySwitcher active={activeCategory} setActive={setActiveCategory} />
        <ProjectGrid activeCategory={activeCategory} />
      </div>
    </section>
  )
}

