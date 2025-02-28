import { ThemeProvider } from "@/components/theme-provider";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <footer className="text-center opacity-50">
            Copyright © 2025 - DominickCS
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
