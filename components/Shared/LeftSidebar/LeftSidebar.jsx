"use client";
import Link from "next/link";
import React from "react";
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
  MountainIcon,
  StarIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  const Links = [
    { title: "Home", href: "/", icon: <HomeIcon className="mr-4" /> },
    {
      title: "Find Jobs",
      href: "/jobsinkenya",
      icon: <BriefcaseIcon className="mr-4" />,
    },
    {
      title: "Saved",
      href: "/saved",
      icon: <StarIcon className="mr-4" />,
    },
    {
      title: "Tags",
      href: "/tags",
      icon: <TagIcon className="mr-4" />,
    },
    {
      title: "Communities",
      href: "/communities",
      icon: <MessagesSquareIcon className="mr-4" />,
    },
    {
      title: "Ask a Question",
      href: "/askaquestion",
      icon: <HelpCircleIcon className="mr-4 " />,
    },
    {
      title: "Job Trends",
      href: "/jobtrendinkenya",
      icon: <MountainIcon className="mr-4" />,
    },
  ];
  return (
    <section className="sticky left-0 top-28 flex flex-col justify-between h-[70vh]  border-r-2 border-[#d8d5d5] ">
      <ul className="flex flex-col justify-between h-[75%] overflow-y-auto">
        {Links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.title}
              className={`flex ${isActive ? "font-bold" : ""}`}
            >
              {React.cloneElement(link.icon, {
                className: `mr-4 ${isActive ? "fill-black stroke-white" : ""}`,
              })}
              <Link href={link.href}> {link.title}</Link>
            </li>
          );
        })}
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
  );
};

export default LeftSidebar;
