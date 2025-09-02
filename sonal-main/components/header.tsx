import Link from "next/link"

export function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <nav className="flex items-center gap-8">
          <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            About
          </Link>
          <Link
            href="mailto:shah5sv@mail.uc.edu"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/sonalshah2807/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://medium.com/@shahsv28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Medium
          </Link>
          <Link
            href="https://github.com/sonalvshah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://public.tableau.com/app/profile/shahsv/vizzes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Tableau
          </Link>
        </nav>
      </div>
    </header>
  )
}
