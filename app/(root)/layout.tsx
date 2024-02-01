/* eslint-disable camelcase */
import type { Metadata } from "next";
import RightSidebar from "@/components/Shared/Sidebar/RightSidebar";
import "../globals.css";
import React from "react";
import Navbar from "@/components/Shared/Navbar/Navbar";
import LeftSidebar from "@/components/Shared/LeftSidebar/LeftSidebar";
import { Space_Grotesk } from "next/font/google";
export const metadata: Metadata = {
  title: "Jobs Reservoir",
  description:
    "Discover your next career opportunity with our dynamic job board web application. Explore diverse job listings, connect with top employers, and take the next step in your professional journey. Streamlined and user-friendly, our platform is designed to match you with the perfect job effortlessly. Elevate your career with our innovative job board – where opportunities meet aspirations.",
};
// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} `}>
        <Navbar />
        <main className="grid grid-cols-gridA py-3 px-6 min-h-screen mt-6 gap-x-5 ">
          <LeftSidebar />
          <section>{children}</section>
          <div>
            <RightSidebar />
          </div>
          {/* <div>Toaster</div> */}
        </main>
      </body>
    </html>
  );
}
