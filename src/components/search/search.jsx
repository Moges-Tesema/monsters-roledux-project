import React from "react";
export const SearchBox = ({ placeholder, handleChanger }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChanger}
      className="pl-5 items-center bg-white py-2 rounded ml-64 mt-5  mb-3 w-1/4 "
    ></input>
  );
};
