import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "./ui/navbar";
import "./globals.css";

const kanit = Kanit({
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
    <html lang="en" className={kanit.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
