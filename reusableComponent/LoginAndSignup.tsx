import Link from "next/link";
interface LoginSignupInfo {
  nameBtn: string;
  image: string;
}

const LoginAndSignup = ({ nameBtn, image }: LoginSignupInfo) => {
  return (
    <div>
      <button type="submit">
        <img src={image} alt="logo infos" />
        <Link href="#">{nameBtn}</Link>
      </button>
    </div>
  );
};

export default LoginAndSignup;
