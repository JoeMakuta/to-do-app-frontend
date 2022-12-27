/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { iTask } from "../types/task";

const Task = ({ task, categorie }: { task: iTask; categorie?: string }) => {
  const random = Math.random() * 10;
  return (
    <div
      className={`singleTask  h-max p-4 m-2 ${
        task.status === "DONE" ? "bg-green-900" : "bg-slate-700"
      } rounded-lg box-border min-w-[260px] min-h-[220px] flex flex-col justify-between self-start hover:animate-pulse`}
    >
      <h4 className="text-slate-100  text-xl font-bold mb-2 border-b-2  border-b-slate-600 m-0 ">
        <span> {task.title}</span>
      </h4>
      <span className="m-0 my-2 tex-xs text-gray-400">{task.description}</span>
      <div className="categories flex items-center flex-wrap gap-2 my-2">
        <span className="bg-red-600 p-1 px-2 rounded-full text-slate-50 text-xs">
          University
        </span>
        <span className="bg-green-600 p-1 px-2 rounded-full text-slate-100 text-xs">
          Work
        </span>
        <span className="bg-yellow-600 p-1 px-2 rounded-full text-slate-100 text-xs">
          Home
        </span>
        <span className="bg-blue-600 p-1 px-2 rounded-full text-slate-100 text-xs">
          Design
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="timing flex items-center gap-2 hover:bg-blue-900 duration-700 text-gray-400 border rounded-full p-2 py-1 w-max ">
          <FaRegClock className="text-lg" />
          <span className="text-xs ">{new Date().toLocaleTimeString()}</span>
        </div>
        <div className="text-lg h-full text-slate-100">
          {task.status === "DONE" ? (
            <h5 className="bg-green-600 p-2 rounded-full animate-pulse">
              <MdOutlineDownloadDone />
            </h5>
          ) : (
            <h5 className="bg-yellow-600 p-2 rounded-full animate-spin hover:animate-none">
              <FiLoader />
            </h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
