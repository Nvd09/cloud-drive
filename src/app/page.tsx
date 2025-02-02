import Header from "~/components/Header";
import FolderView from "~/components/FolderView";
import { mockData } from "~/lib/mockData";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header path={[]} />
      <main className="flex-grow p-4">
        <h1 className="mb-4 text-2xl font-bold text-white">My Drive</h1>
        <FolderView contents={mockData.children} currentPath="" />
      </main>
    </div>
  );
}
