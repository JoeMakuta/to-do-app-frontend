import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import TextInput from "../../reusableComponent/TextInput";
import { ButtonComponent } from "../../reusableComponent/ButtonComponent";
import { BtnReusable } from "../../reusableComponent/BtnReusable";
import LoginAndSignup from "../../reusableComponent/LoginAndSignup";
import Link from "next/link";

export let ValueUsername: any;
export let ValueEmail: any;
export let ValuePassword: any;
export let confirmValuePassword: any;
const Register: NextPage = () => {
  const [ValOfInput, setValOfInput] = useState(null);

  return (
    <div className="bg-[#000000] h-screen">
      <div className="bg-[#E5E5E5]/[0.1] h-screen">
        <Head>
          <title>Register||Uptodo</title>
        </Head>
        <header>
          <p className="text-white font-[lato] font-[320] text-[32px] leading-[38%] text-left align-top pt-10">
            Register
          </p>
        </header>

        <div className="flex flex-col pt-5">
          <TextInput
            Type="text"
            fieldComponent="Username"
            handleChange={(e: string | any) => {
              ValueUsername = e.target.value;
              console.log(ValueUsername);
            }}
            Value={ValOfInput}
          />
          <TextInput
            Type="email"
            fieldComponent="email"
            handleChange={(e: string | any) => {
              ValueEmail = e.target.value;
            }}
            Value={ValOfInput}
          />
          <TextInput
            Type="password"
            fieldComponent="password"
            handleChange={(e: any) => {
              ValuePassword = e.target.value;
            }}
            Value={ValOfInput}
          />
          <TextInput
            Type="password"
            fieldComponent="Confirm your password"
            handleChange={(e: any) => {
              confirmValuePassword = e.target.value;
            }}
            Value={ValOfInput}
          />
          <div className="btn-btn">
            <ButtonComponent nameButton="Register" />
          </div>
        </div>
        <BtnReusable />
        <div className="p-6">
          <LoginAndSignup nameBtn="Register with Google" image="google.png" />
          <LoginAndSignup nameBtn="Register with Apple" image="google.png" />
        </div>

        <footer className="text-center text-white">Already have an account? <Link href={"/login"}>Login</Link></footer>
      </div>
    </div>
  );
};

export default Register;
