import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Asidebar = () => {
  return (
    <div className="hidden sm:block categories min-w-max text-slate-100 p-2">
      <h2 className="text-2xl py-2">My categories</h2>
      <div className="categories">
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-r-full duration-700 flex items-center gap-2">
            <FaAngleRight />
            <h3 className="text-xl text-slate-400">Home</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-r-full duration-700 flex items-center gap-2">
            <FaAngleRight />
            <h3 className="text-xl text-slate-400">University</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-r-full duration-700 flex items-center gap-2">
            <FaAngleRight />
            <h3 className="text-xl text-slate-400">Work</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-r-full duration-700 flex items-center gap-2">
            <FaAngleRight />
            <h3 className="text-xl text-slate-400">design</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Asidebar;
