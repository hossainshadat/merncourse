import React from "react";
import logo from "../../images/logo.png";

function LeftsideHeader() {
  return (
    <div className="flex">
      <img className="w-10 h-10" src={logo} alt="" />
      <h1 className="text-2xl sm:text-4xl font-bold uppercase pl-2 pb-4 text-blue-600">
        MernLearning
      </h1>
    </div>
  );
}

export default LeftsideHeader;
