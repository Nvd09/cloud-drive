import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { type Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloud Drive",
  description: "A Google Drive clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-beige-100 bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
