import React from "react";
import Break from "../Break/Break";
import Excercise from "../Excercise/Excercise";
import Profile from "../Profile/Profile";

function Rightside(props) {
  return (
    <div className="bg-white lg:w-3/12 px-6 py-5 sticky top-0">
      <Profile></Profile>
      <Break></Break>
      <Excercise count={props.count}></Excercise>
    </div>
  );
}

export default Rightside;
