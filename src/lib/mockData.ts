export interface File {
  id: string
  name: string
  type: "file"
  size: number
  lastModified: string
}

export interface Folder {
  id: string
  name: string
  type: "folder"
  lastModified: string
  children: (File | Folder)[]
}

export const mockData: Folder = {
  id: "root",
  name: "My Drive",
  type: "folder",
  lastModified: "2023-05-01",
  children: [
    {
      id: "folder1",
      name: "Documents",
      type: "folder",
      lastModified: "2023-05-02",
      children: [
        {
          id: "file1",
          name: "Resume.pdf",
          type: "file",
          size: 1024 * 1024,
          lastModified: "2023-05-03",
        },
        {
          id: "file2",
          name: "Project Proposal.docx",
          type: "file",
          size: 2 * 1024 * 1024,
          lastModified: "2023-05-04",
        },
      ],
    },
    {
      id: "folder2",
      name: "Images",
      type: "folder",
      lastModified: "2023-05-05",
      children: [
        {
          id: "file3",
          name: "Vacation.jpg",
          type: "file",
          size: 3 * 1024 * 1024,
          lastModified: "2023-05-06",
        },
      ],
    },
    {
      id: "file4",
      name: "Notes.txt",
      type: "file",
      size: 1024,
      lastModified: "2023-05-07",
    },
  ],
}

