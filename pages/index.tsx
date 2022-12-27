import type { NextPage } from "next";
import Head from "next/head";
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="bg-darkIndogo">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar Start */}
      {/* <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src="/logoUptodo.PNG" alt="logoUptodo" className="w-20" />
          </div>
          <div className="hidden space-x-6 text-white md:flex">
            <Link href={"/home"} className="text-LightIdingo">
              <a className="hover:text-indigo-500" href="#">
                Home
              </a>
            </Link>
            <a className="hover:text-indigo-500" href="#">
              FAQ
            </a>
            <a className="hover:text-indigo-500" href="#">
              About
            </a>
          </div>
          <a
            href="/register"
            className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block"
          >
            Get Started
          </a>
        </div>

        <div className="md hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center sm:hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a className="hover:text-indigo-500" href="#">
              Home
            </a>
            <a className="hover:text-indigo-500" href="#">
              About
            </a>
          </div>
        </div>
      </nav> */}
      {/* Navbar End */}

      {/* Sections */}
      {/* Hero1 section */}
      <section id="hero1">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white mt-20">
              Manage your Tasks
            </h1>
            <p className="max-w-sm text-center text-lightGrey md:text-left">
              You can easily manage all of your daily tasks in DoMe for Free
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/login"
                className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block"
              >
                Login
              </a>
              <a
                href="/register"
                className="hidden ml-3 p-3 px-6 pt-2 text-white bg-white text-brightIdingo baseline hover:bg-brightIdingo hover:text-white md:block"
              >
                Free Register
              </a>
            </div>
          </div>
          {/* image */}
          <div className="md:w-1/2">
            <img src="/image1.PNG" alt="" className="h-96" />
          </div>
        </div>
      </section>

      {/* Hero2 section */}
      <section id="hero2">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* image */}
          <div className="md:w-1/2">
            <img src="/image2.PNG" alt="" className="h-96" />
          </div>
          {/* Right item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white mt-20">
              Create daily routine
            </h1>
            <p className="max-w-sm text-center text-lightGrey md:text-left">
              In Uptodo you can create your personalised routine to stay
              productive
            </p>
            <div className="flex justify-center md:justify-start">
              {/* <a href="" className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block">Get Started</a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Hero3 section */}
      <section id="hero3">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white mt-20">
              Organize your Tasks
            </h1>
            <p className="max-w-sm text-center text-lightGrey md:text-left">
              You can organize your daily tasks by adding your tasks into
              separate categories
            </p>
            <div className="flex justify-center md:justify-start">
              {/* <a href="" className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block">Get Started</a> */}
            </div>
          </div>
          {/* image */}
          <div className="md:w-1/2">
            <img src="/image3.PNG" alt="" className="h-96" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brightIdingo">
        <div className="container flex.flex-col reversejustify betweenpx-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and socials links */}

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col-reverse tems-center justifybetween space-y md:flex-col md:space-y-0 md:items-start">
              <img src="/logoUptodo.PNG" alt="logoUptodo" className="w-20" />
              {/* socials links */}
              <div className="flex justify-center space-x-4 ">
                <p className=" text-white">Task Manager</p>
                {/* limks */}
                {/* <a href="#">
                <img src="" alt="fb" />
              </a> */}
              </div>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#">Home</a>
              <a href="#">FAQ</a>
              <a href="#">Community</a>
              <a href="#">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#">Terms et confidentialités</a>
              <a href="#">Conditions d&apos;utilisation</a>
            </div>
            <div className="hidden text-center my-6 text-white md:block">
              Copyright &copy;2022, All Rights Reserved Ujuzi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
