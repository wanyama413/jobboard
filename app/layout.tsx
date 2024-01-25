import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { NavigationMenuDemo } from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter, Space_Grotesk } from "next/font/google";
export const metadata: Metadata = {
  title: "Job Board",
  description:
    "Discover your next career opportunity with our dynamic job board web application. Explore diverse job listings, connect with top employers, and take the next step in your professional journey. Streamlined and user-friendly, our platform is designed to match you with the perfect job effortlessly. Elevate your career with our innovative job board – where opportunities meet aspirations.",
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={spaceGrotesk.className}>
          <NavigationMenuDemo />
          Kenya im here
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
