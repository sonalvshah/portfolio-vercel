"use client"

const categories = [
  { label: "All", value: "all" },
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
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActive(cat.value)}
          className={`
            px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200
            ${active === cat.value
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"}
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
