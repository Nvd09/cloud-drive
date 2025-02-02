import Header from "~/components/Header"
import FolderView from "~/components/FolderView"
import { mockData, type Folder } from "~/lib/mockData"

function findFolder(path: string[], currentFolder: Folder): Folder | null {
  if (path.length === 0) return currentFolder
  const nextFolder = currentFolder.children.find((item) => item.type === "folder" && item.name === path[0]) as
    | Folder
    | undefined
  if (!nextFolder) return null
  return findFolder(path.slice(1), nextFolder)
}

export default function FolderPage({ params }: { params: { path: string[] } }) {
  const folder = findFolder(params.path, mockData)

  if (!folder) {
    return <div className="text-white">Folder not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header path={params.path} />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">{folder.name}</h1>
        <FolderView contents={folder.children} currentPath={`/${params.path.join("/")}`} />
      </main>
    </div>
  )
}

