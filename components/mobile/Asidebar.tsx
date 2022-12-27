import Link from "next/link";
import React from "react";
import {
  FaAd,
  FaAngleRight,
  FaDesktop,
  FaFigma,
  FaHome,
  FaSchool,
} from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";

const Asidebar = () => {
  return (
    <div className="block sm:hidden w-screen  categories text-slate-100 p-2">
      <h2 className="text-2xl py-2">My categories</h2>
      <div className="categories flex overflow-x-scroll">
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex  items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaHome />
            <h3 className="text-sm text-slate-400">Home</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaSchool />
            <h3 className="text-sm text-slate-400">University</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaDesktop />
            <h3 className="text-sm text-slate-400">Work</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaFigma />
            <h3 className="text-sm text-slate-400">design</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex  items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaHome />
            <h3 className="text-sm text-slate-400">Home</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaSchool />
            <h3 className="text-sm text-slate-400">University</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat hover:bg-red-700 p-2 rounded-full duration-700 flex items-center gap-2 bg-gray-700 px-4 mx-0.5">
            <FaDesktop />
            <h3 className="text-sm text-slate-400">Work</h3>
          </div>
        </Link>
        <Link href={""}>
          <div className="cat p-2  rounded-full duration-700 flex items-center gap-2 bg-gray-700 hover:bg-green-900 px-4 mx-0.5">
            <VscAdd />
            <h3 className="text-sm text-slate-300 font-bold">Add</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Asidebar;
