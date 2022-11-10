interface textInput {
  fieldComponent: string;
  Type: string;
  handleChange: (e: any) => void;
  // Value: string | any | null;
  name: string;
}

import { useState } from "react";

const TextInput = ({
  fieldComponent,
  Type,
  handleChange,
  // Value,
  name,
}: textInput) => {
  return (
    <div className="flex flex-column Input-container">
      <label htmlFor="">{fieldComponent}</label>
      <input
        type={Type}
        placeholder={`enter your  ${fieldComponent}`}
        // value={Value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};
export default TextInput;
