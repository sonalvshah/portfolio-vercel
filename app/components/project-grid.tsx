"use client"

import { useState, useEffect } from "react"
// Note: next/link and next/image have been replaced with standard <a> and <img> tags
// to ensure the component compiles correctly outside of a Next.js environment.

const projects = [
  {
    id: 1,
    title: "Built an interactive Tableau dashboard to visualize portfolio performance, identify risk factors, and support data-driven investment insights.",
    // NOTE: Replace these with placeholder images as external image links may not work in this environment.
    image: "https://placehold.co/600x450/d3f0f7/0369a1?text=Tableau+Dashboard+1",
    link: "https://public.tableau.com/app/profile/shahsv/viz/BankLoanInsightsDashboard/SUMMARY",
    type: "tableau",
    category: ["all", "tableau"],
  },
  {
    id: 2,
    title: "Performed EDA and built an interactive Tableau dashboard to visualize sales trends, customer segments, and profit drivers.",
    image: "https://placehold.co/600x450/f7e8d3/a16903?text=Tableau+Dashboard+2",
    link: "https://public.tableau.com/app/profile/shahsv/viz/SuperstoreSales_17513257030340/Dashboard1",
    type: "tableau",
    category: ["all", "tableau"],
  },
  {
    id: 3,
    title: "Cleaned and transformed sales data using SQL, then developed Tableau dashboards to highlight key trends and performance metrics.",
    image: "https://placehold.co/600x450/e0d3f7/6d03a1?text=Car+Sales+Analysis",
    link: "https://public.tableau.com/app/profile/shahsv/viz/CarSalesAnalysis_17421586078730/Dashboard1",
    type: "tableau",
    category: ["all", "tableau", "data-analysis"],
  },
  {
    id: 4,
    title: "Utilized Databricks for data cleaning, exploration, and visualization to uncover trends and insights on pandemic impact.",
    image: "https://placehold.co/600x450/d3f7e0/03a16d?text=COVID+Analysis",
    link: "https://github.com/sonalvshah/Exploring-COVID-19-Data-using-Databricks",
    type: "github",
    category: ["all", "data-analysis"],
  },
  {
    id: 5,
    title: "Applied Graph Convolutional Networks to classify enzymes based on structural and functional properties, improving predictive accuracy with deep learning techniques.",
    image: "https://placehold.co/600x450/f7d3e0/a1036d?text=Enzyme+Classification+(GCN)",
    link: "https://github.com/sonalvshah/Classification-of-Enzymes-using-GCN",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 6,
    title: "Research project using the RarePlanes dataset to evaluate object detection models and assess the impact of synthetic data.",
    image: "https://placehold.co/600x450/e8f7d3/6da103?text=Object+Detection+Research",
    link: "https://github.com/sonalvshah/Sensitivity-of-Object-Detection-Models-to-Synthetic-Training-Data-",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 7,
    title: "Developed deep learning models to predict cancer mortality rates from health datasets, uncovering key patterns and risk factors.",
    image: "https://placehold.co/600x450/d3e0f7/036da1?text=Cancer+Mortality+Prediction",
    link: "https://github.com/sonalvshah/Prediction-of-Cancer-Morality-Rates",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 8,
    title: "Applied deep learning techniques for medical image segmentation to accurately detect and map retinal blood vessels, supporting early disease diagnosis.",
    image: "https://placehold.co/600x450/f7d3d3/a10303?text=Retina+Vessel+Segmentation",
    link: "https://github.com/sonalvshah/Predict-The-Segmentation-of-Retina-Blood-Vessel",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 9,
    title: "Implemented deep learning models on the MNIST dataset to accurately classify digits (0–9) with high accuracy.",
    image: "https://placehold.co/600x450/e0f7d3/6da103?text=MNIST+Digit+Recognition",
    link: "https://github.com/sonalvshah/Prediction-of-Handwritten-Digital-Numbers-Between-0-9",
    type: "github",
    category: ["all", "machine-learning"],
  },
]

interface ProjectGridProps {
  activeCategory?: string
}

// Main component, must be named App for single file structure
export function ProjectGrid({ activeCategory = "all" }: ProjectGridProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(activeCategory))
      )
    }
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        My Portfolio Projects
      </h1>
      <section className="mb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a // Replaced Next/Link with standard <a> tag
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out focus:ring-4 focus:ring-indigo-500/50"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-50">
                <img // Replaced Next/Image with standard <img> tag
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://placehold.co/600x450/eeeeee/333333?text=Image+Unavailable";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 pb-20">
                <h3 className="text-base font-semibold text-gray-900 leading-relaxed line-clamp-3">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-800 font-medium capitalize">
                  {project.type.split('-').join(' ')} Project
                </p>
              </div>

              {/* Circular Arrow Button Element */}
              <div className="absolute bottom-6 right-6 z-20">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-gray-800 hover:bg">
                  {/* Right Arrow Icon (Inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-300 rounded-2xl" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
