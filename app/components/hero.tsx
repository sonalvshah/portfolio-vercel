"use client";

export function Hero() {
  return (
    <section
      className="relative w-screen min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-8 bg-cover bg-center overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
      style={{
        backgroundImage: "url('/hero.png')", // replace with your image path
      }}
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Big Intro */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-worksans text-gray-900 uppercase">
          SONAL SHAH 
        </h1>

        {/* Supporting line */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Welcome! I built this portfolio to show how I explore data, build things <br /> 
          with it and share whatever experiments I’m trying out. 
        </p>

        {/* Button to scroll to Projects */}
        <button
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            projectsSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 px-6 py-3 [#fff3dd] text-black border border-gray-800 rounded-lg hover:bg-black hover:text-white transition"
        >
          Dive in ↓
        </button>
      </div>
    </section>
  );
}
