/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Header = (): JSX.Element => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className="w-full  fixed  flex justify-around items-center text-white bg-slate-700 p-2 box-border z-50 shadow-2xl">
      <div className="w-14 bg-slate-700">
        <img src="/logoUptodo.PNG" alt="" />
      </div>
      <div className="links">
        <ul className="flex gap-6 justify-start">
          {user ? (
            <>
              <li className="cursor-pointer">
                <Link href="/home">
                  <div className="flex flex-row gap-1  items-center">
                    <HiHome className="text-xl" />
                    <h4 className="">Home</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="">
                  <div className="flex flex-row gap-1  items-center">
                    <FaRegCalendarAlt className="text-xl" />
                    <h4 className="">Calendar</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="">
                  <div className="flex flex-row gap-1 items-center">
                    <BiTime className="text-xl" />
                    <h4 className="">Focus</h4>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="">
                  <div className="flex flex-row gap-1  items-center">
                    <VscAccount className="text-xl" />
                    <h4 className="">Profile</h4>
                  </div>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/register">
                  <div className="flex flex-row gap-1  items-center hover:animate-pulse">
                    <button className="bg-blue-600 px-4 py-2">
                      Get Started
                    </button>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <div className="flex flex-row gap-1  items-center hover:animate-pulse">
                    <button className="bg-gray-800 px-4 py-2 min-w-[120px]">
                      Login
                    </button>
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
