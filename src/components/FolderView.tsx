import type { File, Folder } from "~/lib/mockData"
import { FileIcon, FolderIcon } from "lucide-react"
import Link from "next/link"

interface FolderViewProps {
  contents: (File | Folder)[]
  currentPath: string
}

export default function FolderView({ contents, currentPath }: FolderViewProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="p-2">Name</th>
            <th className="p-2">Last Modified</th>
            <th className="p-2">Size</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item) => (
            <tr key={item.id} className="hover:bg-gray-700">
              <td className="p-2">
                <Link href={`${currentPath}/${item.name}`} className="flex items-center text-white hover:text-blue-300">
                  {item.type === "folder" ? (
                    <FolderIcon className="w-5 h-5 mr-2" />
                  ) : (
                    <FileIcon className="w-5 h-5 mr-2" />
                  )}
                  {item.name}
                </Link>
              </td>
              <td className="p-2 text-gray-400">{item.lastModified}</td>
              <td className="p-2 text-gray-400">
                {item.type === "file" ? `${(item.size / 1024 / 1024).toFixed(2)} MB` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

