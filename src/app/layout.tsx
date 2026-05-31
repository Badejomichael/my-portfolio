import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ResumeDownloadButton from "@/app/components/ResumeDownloadButton";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael | Frontend Engineer",
  description: "Frontend Engineer specializing in React, Next.js, TypeScript and Web3 interfaces.",
  openGraph: {
    title: "Michael | Frontend Engineer",
    description: "Frontend Engineer specializing in React, Next.js, TypeScript and Web3 interfaces.",
    url: "https://devmichael.netlify.app",
    siteName: "Michael",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/pfp.png" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
            <ResumeDownloadButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}