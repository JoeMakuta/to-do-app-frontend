import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import Head from "next/head";
import TextInput from "../../reusableComponent/TextInput";
import { ButtonComponent } from "../../reusableComponent/ButtonComponent";
import { BtnReusable } from "../../reusableComponent/BtnReusable";
import LoginAndSignup from "../../reusableComponent/LoginAndSignup";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../data/auth/actionAuth";
import { AppDispatch } from "../../data/store";

export let ValueUsername: any;
export let ValueEmail: any;
export let ValuePassword: any;
export let confirmValuePassword: any;
const Register: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [ValOfInput, setValOfInput] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const auth = useSelector((state: any) => state.auth);
  console.log(auth);

  const handleChange = (e: any) => {
    setValOfInput({ ...ValOfInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { password2, ...data } = ValOfInput;
    dispatch(login(data));
    console.log(ValOfInput);
  };

  return (
    <div className="bg-[#000000] h-screen">
      <div className="bg-darkIndogo h-screen">
        <Head>
          <title>Register||Uptodo</title>
        </Head>
        <header>
          {/* <p className="text-white font-[lato] font-[320] text-[32px] leading-[38%] text-left align-top pt-10">
            Register
          </p> */}
        </header>
        <nav className="relative container mx-auto p-6">
          {/* Flex container */}
          <div className="flex items-center justify-between">
            {/* Log */}
            <div className="pt-2">
              <img src="/logoUptodo.PNG" alt="logoUptodo" className="w-20" />
            </div>
            {/* Menu */}
            <div className="hidden space-x-6 text-white md:flex">
              <a className="hover:text-indigo-500" href="#">
                Home
              </a>
              <a className="hover:text-indigo-500" href="#">
                FAQ
              </a>
              <a className="hover:text-indigo-500" href="#">
                About
              </a>
            </div>
            {/* Boutton */}
            {/* <a href="/register" className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block">Get Started</a> */}
          </div>
        </nav>

        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* image */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col pt-5">
              <TextInput
                Type="text"
                name="username"
                fieldComponent="username"
                handleChange={handleChange}
              />
              <TextInput
                Type="email"
                name="email"
                fieldComponent="email"
                handleChange={handleChange}
              />
              <TextInput
                Type="password"
                name="password"
                fieldComponent="password"
                handleChange={handleChange}
              />
              <TextInput
                Type="password"
                name="password2"
                fieldComponent="Confirm your password"
                handleChange={handleChange}
              />
              <div className="btn-btn">
                <ButtonComponent nameButton="Register" />
              </div>
            </form>
            <BtnReusable />
            <div className="p-6">
              <LoginAndSignup
                nameBtn="Register with Google"
                image="google.png"
              />
              <LoginAndSignup
                nameBtn="Register with Apple"
                image="google.png"
              />
            </div>
          </div>
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-darkIndogo mt-20">
            Register
          </h1>
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-darkIndogo mt-20">
            Register
          </h1>

          {/* Right item */}
          <div className="flex flex-col mb-32 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white mt-20">
              Register
            </h1>
            <p className="max-w-sm text-center text-lightGrey md:text-left">
              Welcome to Uptodo, create a new account.
              <br />
              Already have an account?{" "}
              <Link href={"/login"} className="text-LightIdingo">
                Please Login
              </Link>
            </p>
            <div className="flex justify-center md:justify-start">
              {/* <a href="" className="hidden p-3 px-6 pt-2 text-white bg-brightIdingo baseline hover:bg-LightIdingo md:block">Get Started</a> */}
            </div>
          </div>
        </div>

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
                <a href="#">Conditions d'utilisation</a>
              </div>
              <div className="hidden text-center my-6 text-white md:block">
                Copyright &copy;2022, All Rights Reserved Ujuzi
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
