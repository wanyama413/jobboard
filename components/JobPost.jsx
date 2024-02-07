import React from "react";
import Image from "next/image";
import photo from "@/public/assets/job.jpg";
import {
  CalendarDaysIcon,
  EyeIcon,
  MapPinIcon,
  Share2Icon,
  StarIcon,
} from "lucide-react";

const JobPost = () => {
  return (
    <article className="flex gap-5 mt-10">
      <div className="flex  flex-shrink-0 rounded-full overflow-hidden h-[30px] w-[30px] ">
        <Image
          className="w-full h-full object-cover"
          src={photo}
          alt="photo of job advertiser"
        />
      </div>
      <div>
        <p className="font-bold text-sm">
          Career Options Africa Ltd Full-Stack Developer (Remote) at Career
          Options Africa Limited
        </p>
        <p className="text-xs">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis
          cum animi quibusdam odit, praesentium sequi molestiae expedita maxime
          magni voluptate eaque vel odio libero repudiandae.praesentium sequi
          molestiae expedita maxime magni voluptate eaque vel odio libero
          repudiandae.
        </p>
        <div className="flex items-center justify-evenly mt-3">
          <p className="flex items-center font-bold text-[0.6rem]  capitalize">
            <CalendarDaysIcon size={13} className="mr-1" /> 30/12/2024
          </p>
          <p className="text-xs font-bold flex items-center ">
            <MapPinIcon size={13} className="mr-1" /> Mombasa
          </p>
          <p className="flex items-center font-bold text-[0.6rem]  capitalize">
            <EyeIcon size={13} className="mr-1" /> 30 views
          </p>
          <p className="flex items-center ">
            <StarIcon size={13} />
          </p>
          <p className="flex items-center ">
            <Share2Icon size={13} />
          </p>
        </div>
      </div>
      <div>
        <p className="flex flex-col items-center text-[0.7rem] font-bold text-red-400">
          <span>21 days </span>
          <span>Remaining</span>
        </p>
      </div>
    </article>
  );
};

export default JobPost;
