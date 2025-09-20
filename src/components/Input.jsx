import React from "react";

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border px-3 py-2 rounded-lg w-full"
    />
  );
}

export default Input;
