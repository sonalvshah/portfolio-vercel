"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const projects = [
  {
    id: 1,
    title: "Bank Loan Insights Dashboard",
    image: "/bank-loan-insights.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/BankLoanInsightsDashboard/SUMMARY",
    type: "tableau",
    category: ["all", "tableau", "storytelling"],
  },
  {
    id: 2,
    title: "Superstore Sales Analysis",
    image: "/superstore-sales.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/SuperstoreSales_17513257030340/Dashboard1",
    type: "tableau",
    category: ["all", "tableau", "storytelling"],
  },
  {
    id: 3,
    title: "Car Sales Analysis",
    image: "/car-sales-analysis.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/CarSalesAnalysis_17421586078730/Dashboard1",
    type: "tableau",
    category: ["all", "tableau", "storytelling"],
  },
  {
    id: 4,
    title: "Advanced Loan Portfolio Analytics",
    image: "/financial-portfolio-analytics-with-risk-assessment.png",
    link: "https://github.com/sonalvshah/Advanced-Loan-Portfolio-Analytics",
    type: "github",
    category: ["all", "my-projects", "machine-learning"],
  },
  {
    id: 5,
    title: "Car Sales Trends Visualization",
    image: "/automotive-sales-trends-with-time-series-and-bar-c.png",
    link: "https://github.com/sonalvshah/Visualizing-Car-Sales-Trends-in-Tableau",
    type: "github",
    category: ["all", "my-projects", "tableau"],
  },
  {
    id: 6,
    title: "COVID-19 Data Analysis",
    image: "/covid-data-analysis-dashboard-with-geographic-heat.png",
    link: "https://github.com/sonalvshah/Exploring-COVID-19-Data-using-Databricks",
    type: "github",
    category: ["all", "my-projects", "storytelling"],
  },
  {
    id: 7,
    title: "Enzyme Classification using GCN",
    image: "/machine-learning-neural-network-visualization-with.png",
    link: "https://github.com/sonalvshah/Classification-of-Enzymes-using-GCN",
    type: "github",
    category: ["all", "my-projects", "machine-learning"],
  },
  {
    id: 8,
    title: "Object Detection Research",
    image: "/computer-vision-object-detection-with-bounding-box.png",
    link: "https://github.com/sonalvshah/Sensitivity-of-Object-Detection-Models-to-Synthetic-Training-Data-",
    type: "github",
    category: ["all", "my-projects", "machine-learning"],
  },
  {
    id: 9,
    title: "Cancer Mortality Prediction",
    image: "/medical-data-analysis-with-predictive-modeling-cha.png",
    link: "https://github.com/sonalvshah/Prediction-of-Cancer-Morality-Rates",
    type: "github",
    category: ["all", "my-projects", "machine-learning"],
  },
  {
    id: 10,
    title: "Handwritten Digit Recognition",
    image: "/handwritten-digit-recognition-neural-network-with-.png",
    link: "https://github.com/sonalvshah/Prediction-of-Handwritten-Digital-Numbers-Between-0-9",
    type: "github",
    category: ["all", "my-projects", "machine-learning"],
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
      setFilteredProjects(projects.filter((project) => project.category.includes(activeCategory)))
    }
  }, [activeCategory])

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-tight mb-1">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {project.type === "tableau" ? "Tableau" : "GitHub"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
