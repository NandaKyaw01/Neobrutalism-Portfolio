import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALEX CHEN // Senior Full-Stack Systems Engineer",
  description:
    "Portfolio of Alex Chen — Senior Full-Stack Systems Engineer building resilient distributed systems, Next.js, Node.js, and high-impact digital experiences.",
  keywords: [
    "Full-Stack Engineer",
    "Software Architect",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Neobrutalism",
    "Tailwind CSS",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "ALEX CHEN // Senior Full-Stack Systems Engineer",
    description:
      "High-throughput distributed systems, resilient backends, and bold web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFDF5] text-black antialiased">
        {children}
      </body>
    </html>
  );
}
