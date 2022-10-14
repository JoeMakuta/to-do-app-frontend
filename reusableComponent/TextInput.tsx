interface textInput {
  fieldComponent: string;
  Type: string;
  handleChange: any;
  Value: string | any | null;
}

import { useState } from "react";

const TextInput = ({
  fieldComponent,
  Type,
  handleChange,
  Value,
}: textInput) => {
  return (
    <div className="flex flex-column Input-container">
      <label htmlFor="">{fieldComponent}</label>
      <input
        type={Type}
        placeholder={`enter your  ${fieldComponent}`}
        value={Value}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextInput;
