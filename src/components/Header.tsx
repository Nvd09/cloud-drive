import Link from "next/link"
import { ChevronRight, Upload } from "lucide-react"

interface HeaderProps {
  path: string[]
}

export default function Header({ path }: HeaderProps) {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <nav className="flex items-center space-x-2">
        <Link href="/" className="text-white hover:text-blue-300">
          My Drive
        </Link>
        {path.map((folder, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/${path.slice(0, index + 1).join("/")}`} className="text-white hover:text-blue-300">
              {folder}
            </Link>
          </div>
        ))}
      </nav>
      <button className="bg-blue-500 hover:bg-blue-600 text-beige-100 px-6 py-2 rounded-full flex items-center transition-colors duration-200">
        <Upload className="w-4 h-4 mr-2" />
        Upload
      </button>
    </header>
  )
}

