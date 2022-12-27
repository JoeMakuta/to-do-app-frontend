/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";

const Addcategory = ({
  isShow,
  setHide,
}: {
  isShow: boolean;
  setHide: any;
}) => {
  return (
    <div
      className={` bg-gray-600 mx-2 rounded-lg min-w-[200px]  sm:min-w-[400px] duration-700`}
    >
      <form
        onSubmit={() => console.log("first")}
        className={`${!isShow ? "hidden" : "block"}`}
      >
        <div className=" flex-col p-2">
          <h3 className="text-gray-300 font-extrabold text-2xl pb-4">
            Add category
          </h3>
          <label htmlFor="name" className=" text-gray-200">
            Category name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="bg-gray-500 focus:bg-gray-500 rounded-md border-gray-500 min-w-full focus:outline-none p-1"
            onChange={() => console.log("first")}
          />
        </div>

        <div className="w-full flex flex-row p-2 items-center gap-2 justify-between mt-2">
          <button
            className=" hover:bg-red-900  text-slate-300 duration-700 hover:animate-pulse w-1/2 py-2 rounded-md  text-lg"
            onClick={() => setHide(false)}
            type="reset"
          >
            close
          </button>
          <button
            className="bg-brightIdingo  hover:animate-pulse w-1/2 py-2 rounded-md text-slate-100  text-lg"
            onClick={() => setHide(false)}
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addcategory;
