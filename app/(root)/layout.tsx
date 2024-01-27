import type { Metadata } from "next";
import "../globals.css";
import React from "react";
import Navbar from "@/components/Shared/Navbar/Navbar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import {
  BriefcaseIcon,
  HelpCircleIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MessagesSquareIcon,
  StarIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";

import { Inter, Space_Grotesk } from "next/font/google";
export const metadata: Metadata = {
  title: "Jobs Reservoir",
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
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} `}>
        <Navbar />
        <main className="grid grid-cols-gridA py-3 px-6 min-h-screen mt-6 gap-x-5">
          <section className="sticky left-0 top-0 flex flex-col justify-between h-[80vh]  border-r-2 border-[#d8d5d5] ">
            <ul className="flex flex-col justify-between h-[70%] overflow-y-auto">
              <li className="flex items-center ">
                <HomeIcon className="mr-4" />
                Home
              </li>
              <li className="flex">
                <BriefcaseIcon className="mr-4" />
                Find Jobs
              </li>
              <li className="flex">
                <StarIcon className="mr-4" />
                Saved
              </li>
              <li className="flex">
                <TagIcon className="mr-4" />
                Tags
              </li>
              <li className="flex">
                <MessagesSquareIcon className="mr-4" />
                Communities
              </li>
              <li className="flex">
                <HelpCircleIcon className="mr-4" />
                Ask a Question
              </li>
              <li className="flex">
                <TrendingUpIcon className="mr-4" />
                Trends
              </li>
            </ul>

            <SignedIn>
              <div className="flex justify-center w-1/2 font-bold text-red-500">
                <LogOutIcon />
                <SignOutButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex justify-center w-1/2 font-bold text-red-400">
                <LogInIcon />
                <SignInButton />
              </div>
            </SignedOut>
          </section>
          <section>{children}</section>
          <div>RIght Sidebar</div>
          {/* <div>Toaster</div> */}
        </main>
      </body>
    </html>
  );
}
