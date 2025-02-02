import Header from "~/components/Header";
import FolderView from "~/components/FolderView";
import { mockData, type Folder } from "~/lib/mockData";

function findFolder(path: string[], currentFolder: Folder): Folder | null {
  if (path.length === 0) return currentFolder;
  const nextFolder = currentFolder.children.find(
    (item) => item.type === "folder" && item.name === path[0],
  ) as Folder | undefined;
  if (!nextFolder) return null;
  return findFolder(path.slice(1), nextFolder);
}

interface PageProps {
  params: Promise<{ path: string[] }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function FolderPage({ params, searchParams }: PageProps) {
  const { path } = await params;
  const folder = findFolder(path, mockData);

  if (!folder) {
    return <div className="text-white">Folder not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header path={path} />
      <main className="flex-grow p-4">
        <h1 className="mb-4 text-2xl font-bold text-white">{folder.name}</h1>
        <FolderView
          contents={folder.children}
          currentPath={`/${path.join("/")}`}
        />
      </main>
    </div>
  );
}
