"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Built an interactive Tableau dashboard to visualize portfolio performance, identify risk factors, and support data-driven investment insights.",
    image: "/bank-loan-insights.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/BankLoanInsightsDashboard/SUMMARY",
    type: "tableau",
    category: ["all", "tableau"],
  },
  {
    id: 2,
    title: "Performed EDA and built an interactive Tableau dashboard to visualize sales trends, customer segments, and profit drivers.",
    image: "/superstore-sales.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/SuperstoreSales_17513257030340/Dashboard1",
    type: "tableau",
    category: ["all", "tableau"],
  },
  {
    id: 3,
    title: "Cleaned and transformed sales data using SQL, then developed Tableau dashboards to highlight key trends and performance metrics.",
    image: "/automotive-sales-trends-with-time-series-and-bar-c.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/CarSalesAnalysis_17421586078730/Dashboard1",
    type: "medium",
    category: ["all", "tableau", "data-analysis"],
  },
  {
    id: 4,
    title: "Utilized Databricks for data cleaning, exploration, and visualization to uncover trends and insights on pandemic impact.",
    image: "/covid-data-analysis-dashboard-with-geographic-heat.png",
    link: "https://github.com/sonalvshah/Exploring-COVID-19-Data-using-Databricks",
    type: "github",
    category: ["all", "data-analysis"],
  },
  {
    id: 5,
    title: "Applied Graph Convolutional Networks to classify enzymes based on structural and functional properties, improving predictive accuracy with deep learning techniques.",
    image: "/machine-learning-neural-network-visualization-with.png",
    link: "https://github.com/sonalvshah/Classification-of-Enzymes-using-GCN",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 6,
    title: "Research project using the RarePlanes dataset to evaluate object detection models and assess the impact of synthetic data.",
    image: "/computer-vision-object-detection-with-bounding-box.png",
    link: "https://github.com/sonalvshah/Sensitivity-of-Object-Detection-Models-to-Synthetic-Training-Data-",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 7,
    title: "Developed deep learning models to predict cancer mortality rates from health datasets, uncovering key patterns and risk factors.",
    image: "/medical-data-analysis-with-predictive-modeling-cha.png",
    link: "https://github.com/sonalvshah/Prediction-of-Cancer-Morality-Rates",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 8,
    title: "Applied deep learning techniques for medical image segmentation to accurately detect and map retinal blood vessels, supporting early disease diagnosis.",
    image: "segmentation-of-retina-vessel.png",
    link: "https://github.com/sonalvshah/Predict-The-Segmentation-of-Retina-Blood-Vessel",
    type: "github",
    category: ["all", "machine-learning"],
  },
  {
    id: 9,
    title: "Implemented deep learning models on the MNIST dataset to accurately classify digits (0–9) with high accuracy.",
    image: "/handwritten-digit-recognition-neural-network-with-.png",
    link: "https://github.com/sonalvshah/Prediction-of-Handwritten-Digital-Numbers-Between-0-9",
    type: "github",
    category: ["all", "machine-learning"],
  },
]

interface ProjectGridProps {
  activeCategory?: string
}

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
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100 transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Content (Below Image) */}
            <div className="p-4 flex items-start justify-between">
              <div className="pr-4">
                <h3 className="text-base font-medium text-gray-900 line-clamp-3 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {project.type === "tableau" ? "Tableau" : project.type === "github" ? "GitHub" : "Medium"}
                </p>
              </div>

              {/* Circle Button with Right Arrow */}
              <div className="flex-shrink-0 mt-1">
                <button
                  // Button is inside the Link, so the Link handles navigation.
                  // Adding pointer-events-none prevents double-click/double-tap issues, 
                  // but still visually represents the action.
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-300 group-hover:bg-pink-600 group-hover:translate-x-1"
                  aria-label={`View project: ${project.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
