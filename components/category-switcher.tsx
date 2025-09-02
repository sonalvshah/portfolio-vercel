"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "ALL CATEGORIES" },
  { id: "tableau", label: "DATA VISUALIZATION" },
  { id: "storytelling", label: "STORYTELLING" },
  { id: "machine-learning", label: "MACHINE LEARNING" },
  { id: "my-projects", label: "MY PROJECTS" },
]

interface CategorySwitcherProps {
  onCategoryChange?: (category: string) => void
}

export function CategorySwitcher({ onCategoryChange }: CategorySwitcherProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className="mb-12">
      <div className="bg-yellow-400 flex flex-wrap items-center justify-center py-3 sm:py-4 rounded-sm mx-4 sm:mx-0">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-3 sm:px-6 py-2 font-semibold text-xs sm:text-sm tracking-wide transition-colors ${
              activeCategory === category.id ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
