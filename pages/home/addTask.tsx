import type { NextPage } from "next";
import { useEffect, useState } from "react";
import FixedButton from "../../reusableComponent/FixedButton";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../data/store";
import {
  addTasks,
  deleteTask,
  getOneTask,
  getTasks,
  updateTask,
} from "../../data/tasks/tasksActions";
import Task from "../../components/Task";
import { iTask, iTaskInput } from "../../types/task";
import Link from "next/link";
import Asidebar from "../../components/Asidebar";
import { BiAddToQueue, BiHome } from "react-icons/bi";
import { BsTagFill, BsFillFlagFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CategorieBtn from "../../reusableComponent/tasks/CategorieBtn";
import Addcategory from "../../components/Addcategory";

const AddTask: NextPage = () => {
  const [isShowCat, setIsShowCat] = useState(false);
  const [taskInput, setTaskInput] = useState<iTaskInput>({
    name: "",
    description: "",
    priority: 1,
    deadline: "",
    categories: [],
  });
  const {
    tasks,
    isSuccess,
    isError,
    errorMessage,
    typeError,
    isLoading,
    successMessage,
  } = useSelector((state: any) => state.tasks);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [showTaskProperty, setShowTaskProperty] = useState({
    priority: false,
    categories: false,
  });

  const displayCat = () => {};

  const handleChange = (e: any) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };
  const handleChangePriority = (value: number) => {
    setTaskInput({ ...taskInput, priority: value });
  };

  const handleAddCategory = (cat: string) => {
    // if categorie already exist we delete it
    if (taskInput.categories.includes(cat)) {
      setTaskInput({
        ...taskInput,
        categories: taskInput.categories.filter((ele) => ele !== cat),
      });
    } else {
      // if not we add it
      const categories: string[] = taskInput.categories;
      categories.push(cat);
      setTaskInput({
        ...taskInput,
        categories: categories,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      taskInput.name === "" ||
      taskInput.description == "" ||
      taskInput.deadline === ""
    ) {
      toast.warn("some important fileds missing");
    } else {
      const task: iTask = {
        title: taskInput.name,
        description: taskInput.description,
        dateOfCompletion: new Date(taskInput.deadline),
        status: "IN_PROGRESS",
      };
      dispatch(addTasks(task));
    }
  };
  useEffect(() => {
    if (isError && errorMessage) toast.error(`${errorMessage && errorMessage}`);
    if (successMessage && successMessage === "ADD_SUCCESS") {
      toast.success("task saved");
      router.replace("/home");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="h-screen flex-auto">
      <Header />
      <div className="tasks  box-border py-4 pt-20">
        {/* <h2 className="text-3xl pl-4 text-slate-100 ml-2">Add task </h2> */}
        <div className="flex justify-center w-full">
          <div className="flex w-full flex-wrap gap-4 justify-center p-4   items-start">
            <div className="bg-gray-600 p-2 rounded-lg min-w-[200px]  sm:min-w-[400px]  duration-700">
              {/* <h3>Add Task</h3> */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                  <h3 className="text-gray-300 font-extrabold text-3xl pb-4">
                    Add Task
                  </h3>
                  <label htmlFor="name" className=" text-gray-200">
                    Task name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="bg-gray-500 focus:bg-gray-500 rounded-md border-gray-500 min-w-full focus:outline-none p-1"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col p-2">
                  <label htmlFor="description" className="text-gray-200">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="bg-gray-500 rounded-md border-gray-500 h-20 focus:outline-none p-1 text-slate-100"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex flex-col p-2">
                  <label htmlFor="deadline" className=" text-gray-200">
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="bg-gray-500 rounded-md border-gray-500 min-w-full focus:outline-none p-1"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row p-2 items-center justify-between mt-2">
                  <div className="flex ">
                    <BsTagFill
                      className="text-slate-100 text-2xl mr-4"
                      onClick={() =>
                        setShowTaskProperty({
                          ...showTaskProperty,
                          categories: !showTaskProperty.categories,
                          priority: false,
                        })
                      }
                    />
                    {/* <BiStopwatch className="text-slate-100 text-2xl mr-4" /> */}
                    <BsFillFlagFill
                      className="text-slate-100 text-2xl mr-4"
                      onClick={() =>
                        setShowTaskProperty({
                          ...showTaskProperty,
                          priority: !showTaskProperty.priority,
                          categories: false,
                        })
                      }
                    />
                  </div>
                  <button
                    className="bg-brightIdingo hover:animate-pulse px-20 py-2 rounded-md text-slate-100 text-lg"
                    type="submit"
                  >
                    save
                  </button>
                </div>
              </form>
              <div
                className={`labels mt-8 ${
                  showTaskProperty.priority ? "block" : "hidden"
                } duration-700`}
              >
                <h4 className="text-slate-200 ml-2 mt-2 border-b-2 border-b-slate-500">
                  Task priority
                </h4>
                <div className="flex flex-row p-2">
                  <div
                    className="label border-2 border-gray-600  bg-gray-400 hover:bg-gray-600 hover:border-gray-400 00 p-2 w-14 h-14 text-slate-100 rounded-md flex flex-col items-center justify-between duration-700"
                    onClick={() => handleChangePriority(1)}
                  >
                    <BsFillFlagFill />
                    <span className="text-sm">1</span>
                  </div>
                  <div
                    className="label border-2 border-gray-600  bg-gray-400 hover:bg-gray-600 hover:border-gray-400 00 p-2 w-14 h-14 text-slate-100 rounded-md flex flex-col items-center justify-between duration-700"
                    onClick={() => handleChangePriority(2)}
                  >
                    <BsFillFlagFill />
                    <span className="text-sm">2</span>
                  </div>
                </div>
                <div className="flex flex-row p-2 items-center justify-between mt-2 gap-2">
                  <button
                    className="hover:bg-red-800  py-2 rounded-md w-1/2 text-gray-400 text-lg duration-700"
                    onClick={() => {
                      setShowTaskProperty({
                        ...showTaskProperty,
                        priority: false,
                      });
                    }}
                  >
                    cancel
                  </button>
                  <button className=" border-brightIdingo border-2 hover:bg-brightIdingo duration-700 py-2 rounded-md w-1/2 text-gray-300 text-lg">
                    save priority
                  </button>
                </div>
              </div>
              <div
                className={`labels mt-8 ${
                  showTaskProperty.categories ? "block" : "hidden"
                } duration-700`}
              >
                <h4 className="text-slate-200 ml-2 mt-2 border-b-2 border-b-slate-500">
                  Task categories
                </h4>
                <div className="flex justify-between">
                  <div className="flex flex-row gap-2 p-2">
                    <CategorieBtn
                      Icon={MdWork}
                      name="work"
                      handleClick={handleAddCategory}
                    />
                    <CategorieBtn
                      Icon={BiHome}
                      name="home"
                      handleClick={handleAddCategory}
                    />
                  </div>
                  <div
                    className="flex flex-col text-gray-300 m-2"
                    onClick={() => setIsShowCat(!isShowCat)}
                  >
                    <div className="label border-2 border-gray-600  bg-gray-500 hover:bg-gray-600 hover:border-gray-400 00 p-2 w-14 h-14 text-slate-100 rounded-md flex flex-col items-center justify-center duration-700">
                      <BiAddToQueue className="text-2xl" />
                    </div>
                    <h4 className="pl-1 text-sm text-center">New</h4>
                  </div>
                </div>
                <div className="flex flex-row p-2 items-center justify-between mt-2 gap-2">
                  <button
                    className=" hover:bg-red-800 bg-gray-600  py-2 rounded-md w-1/2 text-gray-400 text-lg duration-700"
                    onClick={() => {
                      setShowTaskProperty({
                        ...showTaskProperty,
                        categories: false,
                      });
                    }}
                  >
                    cancel
                  </button>
                  <button className=" border-brightIdingo border-2 hover:bg-brightIdingo duration-700 py-2 rounded-md w-1/2 text-gray-300 sm:text-lg">
                    save categories
                  </button>
                </div>
              </div>
            </div>
            <Addcategory isShow={isShowCat} setHide={setIsShowCat} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
