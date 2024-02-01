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
  StarIcon,
  TagIcon,
  TrendingUpIcon,
} from "lucide-react";

const LeftSidebar = () => {
  return (
    <section className="sticky left-0 top-28 flex flex-col justify-between h-[70vh]  border-r-2 border-[#d8d5d5] ">
      <ul className="flex flex-col justify-between h-[75%] overflow-y-auto">
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
          Job Trends
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
  );
};

export default LeftSidebar;
