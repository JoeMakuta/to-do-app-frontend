import { METHODS } from "http";
import { ValueUsername } from "../pages/register";
import { ValueEmail } from "../pages/register";
import { ValuePassword } from "../pages/register";
import { confirmValuePassword } from "../pages/register";

export const ButtonComponent = ({ nameButton }: { nameButton: string }) => {
  interface inputValue {
    username: any | string;
    email: any | string;
    password: any;
  }
  const HandleClick = (e: any) => {
    e.preventDefault();
    if (nameButton === "Register") {
      if (ValuePassword === confirmValuePassword) {
        if (
          typeof ValueUsername === "string" &&
          typeof ValueEmail === "string"
        ) {
          if (
            ValueEmail !== "" &&
            ValuePassword !== "" &&
            ValueUsername !== "" &&
            confirmValuePassword != ""
          ) {
            const itemsInput: inputValue = {
              username: ValueUsername,
              email: ValueEmail,
              password: ValuePassword,
            };
            fetch("http://trialprojectbackend/signup");
          }
        }
      }
    }
    if (nameButton === "Login") {
    }
  };
  return (
    <div>
      <button type="submit" onClick={HandleClick}>
        {nameButton}
      </button>
    </div>
  );
};
