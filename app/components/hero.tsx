"use client"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle, elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
      </div>
      
      {/* Minimal geometric accent */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-200/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Clean, professional intro */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Sonal Shah
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          I work with data to find patterns and build models.<br />
          Then create visualizations that actually make sense to people.
        </p>

        {/* Clean CTA button */}
        <button
          onClick={() => {
            const projectsSection = document.getElementById("projects")
            projectsSection?.scrollIntoView({ behavior: "smooth" })
          }}
          className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View My Work
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
