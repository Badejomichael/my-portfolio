// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ResumeDownloadButton from "@/app/components/ResumeDownloadButton";
import { Inter, Space_Grotesk } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Michael - Portfolio",
  description: "Modern portfolio built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/pfp.png" />
      </head>

      <body className="bg-[#0A0A0F] text-white">
        <Navbar />
        
        <main className="px-6 md:px-14 lg:px-28">
          {children}
          <ResumeDownloadButton />
        </main>

        <Footer />
      </body>
    </html>
  );
}
