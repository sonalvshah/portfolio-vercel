"use client"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* More visible pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/80 via-purple-100/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/5 to-transparent"></div>
      </div>
      
      {/* Enhanced pastel accent elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-pink-300/60 via-rose-300/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-300/60 via-purple-300/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Diagonal gradient streak */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-200/30 to-transparent transform rotate-12 translate-x-1/4 translate-y-1/4 w-full h-full blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-yellow-200/25 to-transparent transform -rotate-12 -translate-x-1/4 -translate-y-1/4 w-full h-full blur-xl"></div>
      </div>
      
      {/* Smooth fade to white at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

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
