import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div>
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
  );
};
