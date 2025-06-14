import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebbyX - Modern Landing Page",
  description:
    "A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS",
  keywords: ["landing page", "modern", "responsive", "Next.js"],
  authors: [{ name: "WebbyX" }],
  openGraph: {
    title: "WebbyX - Modern Landing Page",
    description:
      "A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebbyX - Modern Landing Page",
    description:
      "A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
