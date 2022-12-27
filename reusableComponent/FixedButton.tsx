import Link from "next/link";
import React from "react";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const FixedButton = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className={`${user ? "flex" : "hidden"}  rounded-full bg-blue-600`}>
      <Link href="/home/addTask">
        <button className=" p-2 text-slate-100 flex items-center ">
          <MdAdd className="text-2xl font-extrabold hover:translate-x-10" />
          <h3 className="text-xs text-slate-300">Add Task </h3>
        </button>
      </Link>
    </div>
  );
};

export default FixedButton;
