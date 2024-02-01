import { ChevronRight } from "lucide-react";
import React from "react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

const RightSidebar = () => {
  const Populartags = [
    { title: "NEXT JS", hits: 31 },
    { title: "JavaScript", hits: 89 },
    { title: "HTML", hits: 3 },
    { title: "CSS", hits: 310 },
    { title: "NODE JS", hits: 27 },
    { title: "REACT JS", hits: 31 },
    { title: "Laravel", hits: 31 },
    { title: "Ruby on Rails", hits: 61 },
    { title: "C#", hits: 54 },
    { title: "PHP", hits: 11 },
  ];
  const hotQuestions = [
    {
      id: 1,
      content:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)",
    },
    {
      id: 2,
      content: "Is it only me or the font is bolder than necessary",
    },
    {
      id: 3,
      content: "Can I get the course for free",
    },
    {
      id: 4,
      content:
        "Redux Toolkit Not Updating State as Expected erything I do, I do it for you you know erything I do, I do it for you you know erything I do, I do it for you you know erything I do, I do it for you you know",
    },
    {
      id: 5,
      content: "Async/Await Function Not Handling Errors Properly",
    },
    {
      id: 6,
      content: "Everything I do, I do it for you you know",
    },
  ];
  return (
    <section className="p-2 text-sm sticky right-0 top-28 flex flex-col border-[#d8d5d5] border-l-2 ">
      <div>
        <p className="font-bold text-lg mb-3">Top Questions</p>
        <ul>
          {hotQuestions?.slice(0, 4).map((question) => {
            return (
              <li key={question?.id} className="mb-3">
                <div className="flex justify-between">
                  <p className="w-[85%]"> {`${question?.content}?`}</p>

                  <ChevronRight size={20} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex  flex-col">
        <p className="font-bold text-lg mb-2 mt-5">Popular Tags</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {Populartags?.map((tags) => {
            return (
              <Link
                key={tags.title}
                href=""
                className={badgeVariants({ variant: "outline" })}
              >
                {tags.title}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
