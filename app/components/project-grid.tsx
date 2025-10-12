"use client"

import Link from "next/link"
import { title } from "process"
import { useState, useEffect } from "react"
import { FaGithub, FaMedium, FaTable } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title:
      "Financial Portfolio Analysis with Risk Assessment",
    description: "Built an interactive Tableau dashboard to visualize portfolio performance, identify risk factors, and support data-driven investment insights.",
    image: "/bank-loan-insights.png",
    link: "https://medium.com/@shahsv28/financial-portfolio-analysis-with-risk-assessment-uncovering-insights-from-bank-loan-data-8578f5ce522f",
    type: "tableau",
    category: ["all", "tableau", "featured"],
    skills: ["Tableau", "Financial Analytics", "Risk Assessment", "SQL", "Excel", "Data Cleaning"],
  },
  {
    id: 2,
      title: "Superstore Sales Analysis",
      description: "Built an interactive Tableau dashboard to analyze sales trends, customer segments, and profit drivers, aiming to improve my dashboard design and visualization skills.",
      image: "/superstore-sales.png",
      link: "https://public.tableau.com/app/profile/shahsv/viz/SuperstoreSales_17513257030340/Dashboard1",
      type: "tableau",
      category: ["all", "tableau"],
      skills: ["Tableau", "Dashboard Design", "Sales Analytics", "SQL", "Excel", "Storytelling with Data"]
    
  },
  {
    id: 3,
    title:
      "Car Sales Data Cleaning and Visualization",
    description: "Cleaned and transformed sales data using SQL, then developed Tableau dashboards to highlight key trends and performance metrics.",
    image: "/automotive-sales-trends-with-time-series-and-bar-c.png",
    link: "https://public.tableau.com/app/profile/shahsv/viz/CarSalesAnalysis_17421586078730/Dashboard1",
    type: "medium",
    category: ["all", "tableau", "data-analysis"],
    skills: ["Tableau", "Dashboard Design", "Sales Analytics", "SQL", "Excel", "Storytelling with Data"],
  },
  {
    id: 4,
    title: "Covid-19 Data Analysis",
    description: "Utilized Databricks for data cleaning, exploration, and visualization to uncover trends and insights on pandemic impact.",
    image: "/covid-data-analysis-dashboard-with-geographic-heat.png",
    link: "https://github.com/sonalvshah/Exploring-COVID-19-Data-using-Databricks",
    type: "github",
    category: ["all", "data-analysis"],
    skills: ["PySpark", "Databricks","Exploratory Data Analysis (EDA)", "Statistical Analysis", "Correlation Analysis"]

  },
  {
    id: 5,
    title: "Enzyme Classification using GCN",
    description: "Applied Graph Convolutional Networks to classify enzymes based on structural and functional properties, improving predictive accuracy with deep learning techniques.",
    image: "/machine-learning-neural-network-visualization-with.png",
    link: "https://github.com/sonalvshah/Classification-of-Enzymes-using-GCN",
    type: "github",
    category: ["all", "machine-learning"],
    skills: ["Python", "PyTorch", "Deep Learning", "Bioinformatics", "Data Preprocessing", "Model Evaluation", "Jupyter Notebook"],
  },
  {
    id: 6,
    title: "Object Detection using Synthetic Training Data",
    description: "Research project using the RarePlanes dataset to evaluate object detection models and assess the impact of synthetic data.",
    image: "/computer-vision-object-detection-with-bounding-box.png",
    link: "https://github.com/sonalvshah/Sensitivity-of-Object-Detection-Models-to-Synthetic-Training-Data-",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: ["Python", "Detectron2", "Computer Vision", "Deep Learning", "Object Detection", "Synthetic Data Generation"]
  },
  {
    id: 7,
    title: "Cancer Morality Prediction",
    description: "Developed deep learning models to predict cancer mortality rates from health datasets, uncovering key patterns and risk factors.",
    image: "/medical-data-analysis-with-predictive-modeling-cha.png",
    link: "https://github.com/sonalvshah/Prediction-of-Cancer-Morality-Rates",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Regression Modeling", "Neural Networks"],
  },
  {
    id: 8,
    title: "Segmentation of Retina Blood Vessels for Medical Imaging",
    description: "Applied deep learning techniques for medical image segmentation to accurately detect and map retinal blood vessels, supporting early disease diagnosis.",
    image: "segmentation-of-retina-vessel.png",
    link: "https://github.com/sonalvshah/Predict-The-Segmentation-of-Retina-Blood-Vessel",
    type: "github",
    category: ["all", "machine-learning"],
    skills: ["Python", "TensorFlow", "Keras", "U-Net", "Image Segmentation", "Medical Imaging"],
  },
  {
    id: 9,
    title: "Handwritten Digit Recognition",
    description: "Implemented deep learning models on the MNIST dataset to accurately classify digits (0–9) with high accuracy.",
    image: "/handwritten-digit-recognition-neural-network-with-.png",
    link: "https://github.com/sonalvshah/Prediction-of-Handwritten-Digital-Numbers-Between-0-9",
    type: "github",
    category: ["all", "machine-learning"],
    skills: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks (CNNs)", "Image Classification"]

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 p-5"
          >
            {/* Image Section */}
            <div className=" rounded-xl flex justify-center h-60 mb-6 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3 group-hover:text-black transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              {project.description ||
                "Explore this project to see the implementation and results."}
            </p>

            {/* Skills Section */}
            {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
             <span
             key={skill}
            className="text-xs font-medium bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 rounded-full"
            >
            {skill}
            </span>
            ))}
            </div>
            )}

            {/* Footer with Arrow */}
            <div className="flex justify-end mt-auto pr-6 pb-2">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-black text-2xl font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
