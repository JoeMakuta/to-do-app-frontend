import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { inputTask } from "../../reusableComponent/iconComponent/inputTask";
import { IconComponnent } from "../../reusableComponent/iconComponent/IconComponnent";
import { Button } from "../../reusableComponent/iconComponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../data/store";
import {
  addTasks,
  deleteTask,
  getOneTask,
  getTasks,
  updateTask,
} from "../../data/tasks/tasksActions";

const Home: NextPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>();

  // console.log(state);

  useEffect(() => {
    // dispatch(getTasks());
    // dispatch(getOneTask("636e4d58a4544a74f866e157"));
    // dispatch(
    //   updateTask("636e4d58a4544a74f866e157", {
    //     title: "Updated task",
    //     description: "updated task from frontend",
    //     dateOfCompletion: new Date().toString(),
    //     status: "IN_PROGRESS",
    //   })
    // );
    // dispatch(deleteTask("636e51f2a4544a74f866e174"));
    // dispatch(
    //   addTasks({
    //     title: "example 2",
    //     description: "example 2",
    //     dateOfCompletion: new Date().toString(),
    //     status: "IN_PROGRESS",
    //   })
    // );
  }, []);

  return (
    <div className="h-screen flex-auto">
      <div className="h-screen flex">
        {/* sidebar */}
        <div className="w-64 bg-darkIndogo  border-r items-center">
          <div className="flex pt-10 pl-1">
            <img
              src="/logoUptodo.PNG"
              alt="logoUptodo"
              className="w-20  items-center"
            />
            {/* <h3 className="pt-5 text-white">Manage your tasks</h3> */}
          </div>
          <div className="mt-8">
            <nav>
              <div className="mt-2 -mx-3">
                <div className="hover:bg-semigray">
                  <Link href={"home"}>
                    <a
                      href="/#"
                      className="flex  text-gray-600 justify-between px-20 py-6 items-center"
                    >
                      <span className="font-medium">Index</span>
                    </a>
                  </Link>
                </div>
                <div className="hover:bg-semigray">
                  <Link href={"home"}>
                    <a
                      href="/#"
                      className="flex  text-gray-600 justify-between px-20 py-6 items-center"
                    >
                      <span className="font-medium">Tasks</span>
                    </a>
                  </Link>
                </div>
                <div className="hover:bg-semigray">
                  <Link href={"home"}>
                    <a
                      href="/#"
                      className="flex  text-gray-600 justify-between px-20 py-6 items-center"
                    >
                      <span className="font-medium">Calendar</span>
                    </a>
                  </Link>
                </div>
                <div className="hover:bg-semigray">
                  <Link href={"home"}>
                    <a
                      href="/#"
                      className="flex  text-gray-600 justify-between px-20 py-6 items-center"
                    >
                      <span className="font-medium">Focuse</span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex-1 min-w-0 bg-darkIndogo">
          <div className="">
            <header className="flex flex-col border-b border-gray-500">
              <div className="flex items-center justify-between">
                <span></span>
                <div className="relative w-64">
                  <span className="absolute w-6 h-6 text-gray">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg> */}
                  </span>
                  <input placeholder="rechercher" />
                </div>
              </div>
              <div>
                <img src="/logoUptodo.PNG" alt="logoUptodo" className="w-20" />
              </div>
              <div>
                {/* <button className="text-white bg-gray-900 m-4 p-4 pt-4 py-2 rounded-md  font-medium hover:bg-gray-800">
                  New task
                </button> */}
              </div>
            </header>
          </div>
          {/* main content */}
          <div className="bg-semigray text-white items-center m-6 w-96 flex-1 overflow-auto">
            <div className="m-6">
              <h1 className="text-center font-bold">New Task</h1>
              <div>
                <form action="#" method="post" className="space-y-6">
                  <div>
                    <label htmlFor="">Task name</label>
                    <input
                      className="bg-semigray border-lightGrey"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <label htmlFor="">Task Description</label>
                    <input
                      className="bg-semigray border-lightGrey"
                      type="text"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Date and Time</label>
                    <input
                      className="bg-semigray border-lightGrey"
                      type="datetime-local"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <label htmlFor="">Task Priority</label>
                    <div className="flex align-middle">
                      <input
                        className="w-4"
                        type="radio"
                        name="priority"
                        value={"1"}
                      />
                      <IconComponnent icon={"drapeau"} label={"1"} />
                    </div>
                  </div>
                  {/* <Button butonName="Save" /> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
