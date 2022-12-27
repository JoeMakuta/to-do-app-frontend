import type { NextPage } from "next";
import Link from "next/link";
interface LoginSignupInfo {
  nameBtn: string;
  image: string;
}

const LoginAndSignup = ({ nameBtn, image }: LoginSignupInfo) => {
  return (
    <div className="text-center">
      <button
        type="submit"
        className="flex w-full p-3 text-center text-white row-auto rounded BtnLoginWith"
      >
        <img
          className="text-center m logoButton"
          src={image}
          alt="logo infos"
        />
        <Link href="#">{nameBtn}</Link>
      </button>
    </div>
  );
};

export default LoginAndSignup;
