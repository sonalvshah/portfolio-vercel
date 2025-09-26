"use client"

export function JourneyTimeline() {
  const currentActivities = [
    {
      title: "analytics & AI intern",
      description: "UC's Center for Business Analytics - consulting for a client and working end-to-end on a project"
    },
    {
      title: "building this portfolio",
      description: "Designing and developing this website to showcase my data analysis journey"
    },
    {
      title: "personal projects",
      description: "Working on projects in my free time while actively seeking new opportunities"
    },
    {
      title: "life outside data",
      description: "Hunting for cute coffee shops, exploring new corners of the states & obsessing over my dog"
    }
  ]

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            what I'm up to
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Currently balancing analytics work, personal projects, and life's simple pleasures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
