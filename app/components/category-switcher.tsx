"use client"

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Data Visualization", value: "tableau" },
  { label: "Data Analysis", value: "data-analysis" },
  { label: "Machine Learning", value: "machine-learning" },
]

interface CategorySwitcherProps {
  active: string
  setActive: (value: string) => void
}

export function CategorySwitcher({ active, setActive }: CategorySwitcherProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActive(cat.value)}
          className={`
            px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border
            ${active === cat.value
              ? "bg-gray-900 text-white border-gray-800"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
