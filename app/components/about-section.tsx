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
    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      Hi, I'm Sonal. I'm currently pursuing my Master's in Computer Science at University of Cincinnati 
      and interning at UC's Center for Business Analytics, where I work with a client on business challenges 
      and turn data into insights. I’d say I’m a data analyst by role, but I lean deeply into data science 
      because I enjoy building and experimenting beyond just reports.
    </p>
  </div>

        </div>
      </div>
</section>
  )
}
