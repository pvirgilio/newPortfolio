import { InstagramIcon, Linkedin } from "lucide-react";
import React from "react";
import { GithubIcon } from "../icons";

export default function Icons() {
  return (
    <div className="flex item-center gap-1 mt-5">
      <div className="cursor-pointer border border-white rounded-full w-10 h-10 flex items-center justify-center group hover:bg-white transition-all ">
        <InstagramIcon className="w-full h-full p-2 group-hover:text-black" />
      </div>
      <div className="cursor-pointer border border-white rounded-full w-10 h-10 flex items-center justify-center group hover:bg-white transition-all">
        <GithubIcon className="w-full h-full p-2 group-hover:text-black " />
      </div>
      <div className="cursor-pointer border border-white rounded-full w-10 h-10 flex items-center justify-center group hover:bg-white transition-all ">
        <Linkedin className="w-full h-full p-2 group-hover:text-black" />
      </div>
    </div>
  );
}
