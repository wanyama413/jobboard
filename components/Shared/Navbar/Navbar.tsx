"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { SunIcon, MoonIcon, Search } from "lucide-react";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between  z-50 w-full px-3 py-5 shadow-md">
      <Link href="/">
        Jobs<span className="text-red-500 text-lg">Reservoir</span>
      </Link>

      <div className="flex items-center h-[44px] w-1/2 shadow-boxx rounded-rads overflow-hidden">
        <input
          placeholder="Search here Globally"
          className="h-full w-full outline-none text-gray-400 px-5 text-lg border-none "
          type="text"
        />
        <div className="flex justify-center items-center cursor-pointer bg-gray-200 w-[10%] h-[44px] ">
          <Search className=" text-gray-500" />
        </div>
      </div>
      <div className="flex items-center justify-around w-[10%]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="cursor-default" align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;