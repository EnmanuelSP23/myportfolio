import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enmanuel Sanchez | IT Support & Cybersecurity Portfolio",
  description:
    "CompTIA Tech+ certified, A+ in progress. Projects in Next.js, Python, and automation — plus certifications, skills, and contact info.",
  keywords: [
    "Enmanuel Sanchez",
    "IT support",
    "help desk",
    "cybersecurity",
    "CompTIA Tech+",
    "CompTIA A+",
    "portfolio",
    "Next.js",
    "Python",
  ],
  openGraph: {
    title: "Enmanuel Sanchez | IT Support & Cybersecurity Portfolio",
    description:
      "CompTIA Tech+ certified, A+ in progress. Projects in Next.js, Python, and automation — plus certifications, skills, and contact info.",
    siteName: "Enmanuel.it",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Enmanuel Sanchez | IT Support & Cybersecurity Portfolio",
    description:
      "CompTIA Tech+ certified, A+ in progress. Projects in Next.js, Python, and automation — plus certifications, skills, and contact info.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
