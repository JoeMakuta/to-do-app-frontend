/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { NextPage } from "next";
import React,{ useEffect } from "react";
import FixedButton from "../../reusableComponent/FixedButton";
import Header from "../../components/Header";
import Asidebar from "../../components/Asidebar";
import AsidebarMobile from "../../components/mobile/Asidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../data/store";
import {
  getTasks,
} from "../../data/tasks/tasksActions";
import Task from "../../components/Task";
import { iTask } from "../../types/task";

const Home: NextPage = () => {
  const { tasks } = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  console.log(tasks);

  useEffect(() => {
    dispatch(getTasks());
    // dispatch(getOneTask("636e4d58a4544a74f866e157"));
    // dispatch(
    //   updateTask("636e4d58a4544a74f866e15", {
    //     title: "Updated task",
    //     description: "updated task from frontend",
    //     dateOfCompletion: new Date().toString(),
    //     status: "IN_PROGRESS",
    //   })
    // );
    // dispatch(deleteTask("636e4dd1a4544a74f866e15b"));
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
    <div className="h-screen flex-auto ">
      <Header />
      <div className="fixed bottom-4 left-4 animate-pulse">
        <FixedButton />
      </div>
      <div className=" flex flex-wrap justify-center pt-16">
        <AsidebarMobile />
        <div className="w-1/6">
          <Asidebar />
        </div>
        <div className="tasks w-full sm:w-5/6 box-border py-4 container">
          <h2 className="text-3xl pl-4 text-slate-100 ml-2">My tasks </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 gap-4 space-y-6 min-h-max">
            {tasks && tasks.length > 0 ? (
              <>
                {tasks.map((task: iTask) => (
                  <Task task={task} key={task._id} />
                ))}
              </>
            ) : (
              <div className="h-screen w-full  flex items-center justify-center">
                <p>No task </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
