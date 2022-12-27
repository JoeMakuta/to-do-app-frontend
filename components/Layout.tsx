import { useRouter } from "next/router";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import FixedButton from "../reusableComponent/FixedButton";
import Asidebar from "./Asidebar";
import AsidebarMob from "./mobile/Asidebar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((state: any) => state.auth);
  const router = useRouter();
  console.log(user);
  return (
    <>
      <Header />
      <div className="h-screen flex-auto pt-16 mt-">
        {router.route !== "/" ? (
          <>
            <div className="fixed bottom-4 left-4 animate-pulse">
              <FixedButton />
            </div>
            <div className=" flex sm:w-full sm:fixed">
              <div
                className={`${
                  user ? "flex" : "hidden"
                } sm:w-1/6 hidden sm:flex`}
              >
                <Asidebar />
              </div>
              <div
                className={`${
                  user ? "flex" : "hidden"
                } w-screen h-16 sm:hidden `}
              >
                <AsidebarMob />
              </div>
              <div
                className={`${
                  user ? "w-full sm:w-5/6" : "w-full"
                } overflow-y-scroll`}
              >
                {children}
              </div>
            </div>
          </>
        ) : (
          <div>{children}</div>
        )}
        {/* <Header /> */}
      </div>
    </>
  );
};

export default Layout;
