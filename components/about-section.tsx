import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/profile.jpg"
                alt="Sonal Shah"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-red-500 mb-6"></div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a Master's student in Computer Science with a passion for data analysis, data science, machine
                learning, and a little bit of data engineering. I love working with data—whether it's querying,
                analyzing, building models, or optimizing pipelines—to turn raw information into meaningful insights.
              </p>

              <p>
                I specialize in querying, analyzing, and visualizing large datasets to uncover trends and drive
                insights. I develop machine learning & deep learning models for classification, forecasting, and
                decision-making, while designing scalable ETL pipelines and working with cloud-based data architectures.
              </p>

              <p>
                My technical toolkit includes SQL, Python, PySpark for programming; Google BigQuery, PostgreSQL, MySQL
                for databases; Tableau, Power BI, Looker Studio for visualization; AWS, GCP, Snowflake, Apache Spark for
                cloud & big data; and Scikit-learn, TensorFlow, PyTorch for ML & AI.
              </p>

              <p>
                I've worked on everything from data analytics and business intelligence to deep learning and cloud-based
                pipelines. Check out my repositories and visualizations to see some of my favorite projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
