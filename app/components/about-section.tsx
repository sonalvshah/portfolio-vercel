import Image from "next/image"

export function AboutSection() {
  return (
<section id="about" className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Left - Image */}
  <div className="flex justify-center lg:justify-start lg:order-1 order-2">
    <Image
      src="/profile.jpg"
      alt="Sonal Shah"
      width={500}
      height={500}
      className="rounded-lg shadow-md w-full max-w-sm h-auto object-cover"
    />
  </div>

  {/* Right - Text */}
  <div className="self-center lg:order-2 order-1 -ml-4">
    <h2 className="text-5xl font-normal text-gray-900 mb-6">
      A bit on me
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      I'm currently pursuing my Master's in Computer Science at University of Cincinnati 
      and interning at UC's Center for Business Analytics, where I work with a client on business challenges 
      and turn data into insights. I'd say I'm a data analyst by role, but I lean deeply into data science 
      because I enjoy building and experimenting beyond just reports.
    </p>
    
    {/* Social Links */}
    <div className="flex flex-wrap gap-4">
      <a
        href="https://github.com/sonalvshah"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
      
      <a
        href="https://public.tableau.com/app/profile/shahsv/vizzes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.654 2.174l.15.018h.392l.15-.018 2.973-.005v2.371h1.836v1.264h-1.836v2.371l-.15-.018h-.392l-.15.018-2.973.005V5.811H9.818V4.547h1.836V2.176zm-1.49 4.155l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003V8.595H8.519V7.807h1.145V6.329zm5.109 0l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003V8.595h-1.145V7.807h1.145V6.329zm-7.642 1.828l.15-.018h.392l.15.018 2.973-.005v2.371h1.836v1.264h-1.836v2.371l-.15-.018h-.392l-.15.018-2.973.005v-2.376H5.818v-1.264h1.836V8.157zm9.582 0l.15-.018h.392l.15.018 2.973-.005v2.371h1.836v1.264h-1.836v2.371l-.15-.018h-.392l-.15.018-2.973.005v-2.376h-1.836v-1.264h1.836V8.157zm-4.791 1.828l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003v-1.483H10.82v-.788h1.145V9.985zm-5.109 1.828l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003v-1.483H4.275v-.788h1.145v-1.477zm10.218 0l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003v-1.483h-1.145v-.788h1.145v-1.477zm-5.109 1.828l.093-.011h.244l.093.011 1.854-.003v1.48h1.145v.788h-1.145v1.48l-.093-.011h-.244l-.093.011-1.854.003v-1.483H10.82v-.788h1.145v-1.477zm-1.49 4.155l.15-.018h.392l.15.018 2.973-.005v2.371h1.836v1.264h-1.836v2.371l-.15-.018h-.392l-.15.018-2.973.005v-2.376H9.818v-1.264h1.836v-2.371z"/>
        </svg>
        Tableau
      </a>
      
      <a
        href="https://medium.com/@shahsv28"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
        Medium
      </a>
      
      <a
        href="https://www.linkedin.com/in/sonalshah2807/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>

        </div>
      </div>
</section>
  )
}
