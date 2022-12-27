import React from "react";
import { IconType } from "react-icons";

interface iCategory {
  handleClick: (name: string) => void;
  Icon: IconType;
  name: string;
}

const CategorieBtn = ({ handleClick, Icon, name }: iCategory) => {
  return (
    <div
      className="flex flex-col text-gray-300"
      onClick={() => handleClick(name)}
    >
      <div
        className="label border-2 border-gray-600  bg-gray-400
        hover:border-gray-400 hover:bg-gray-600 p-2 w-14 h-14
        text-slate-100 rounded-md flex flex-col items-center justify-center duration-700"
      >
        <Icon className="text-2xl" />
      </div>
      <h4 className="pl-1 text-sm text-center">{name}</h4>
    </div>
  );
};

export default CategorieBtn;
