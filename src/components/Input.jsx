import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter city..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 w-60 focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
  );
};

export default Input;
