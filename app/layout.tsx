import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Home - DominickCS",
  description: "Portfolio Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <footer className="text-center opacity-50">
          Copyright © 2025 - DominickCS
        </footer>
      </body>
    </html>
  );
}
