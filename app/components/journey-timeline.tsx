"use client"

export function JourneyTimeline() {
  const experiences = [
    {
      role: "Data Science Analyst",
      place: "USAA",
      description:
        "Working on identity & access management analytics. Designing dashboards, SQL logic, and Snowflake pipelines to improve member experiences.",
      tools: ["Python", "SQL", "Snowflake", "Tableau", "dbt"],
    },
    {
      role: "M.S. Information Technology",
      place: "University of Cincinnati",
      description:
        "Graduated with focus in data science, cloud, and analytics. Capstone on DevOps deployment analysis with AWS and Azure.",
      tools: ["AWS", "Azure", "Power BI"],
    },
    {
      role: "Graduate Assistant",
      place: "Center for Business Analytics",
      description:
        "Built dashboards and predictive models for ABC Fitness (Planet Fitness) project, analyzing 137M+ records.",
      tools: ["Snowflake", "Python", "Power BI"],
    },
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-normal mb-8">Here’s what I’ve been up to:</h2>
        <p className="text-base font-normal text-gray-600">
          - Intern at UC’s Center for Business Analytics- consulting for a client and working end-to-end on a project. <br />
          - Building <span className="italic">this</span> website. <br />
          - Working on projects in my free time, and, ofcourse trying to get hired. <br />
          - Working as a Desk Assistant on campus, a great way to meet people and stay organized.
          - Hunting for cute coffee shops, exploring new corners of the states && obsessing over my dog. 


        </p>
      </div>
    </section>
  )
}
