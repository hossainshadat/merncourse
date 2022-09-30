import React, { useState } from "react";
import Break from "../Break/Break";
import Excercise from "../Excercise/Excercise";
import Profile from "../Profile/Profile";

function Rightside(props) {
  const [time, setTime] = useState(0);

  const breakTime = [
    {
      id: "6334f46e0d22f018736408db",
      count: 25,
    },
    {
      id: "6334f46e6facaf443217e30b",
      count: 34,
    },
    {
      id: "6334f46e5bc19799f2a8eca4",
      count: 20,
    },
    {
      id: "6334f46e5bc19700f2a8eca4",
      count: 25,
    },
    {
      id: "6334f46ec00c4fe82659c371",
      count: 27,
    },
  ];

  const handleTime = (breakTime) => {
    const second = {
      breakTime,
    };
    setTime(time * 0 + breakTime);

    console.log(time);

    const prevStorage = localStorage.getItem("Bookmark");
    const oldStorage = JSON.parse(prevStorage);
    if (oldStorage) {
      localStorage.setItem("Bookmark", JSON.stringify([second]));
      // localStorage.setItem("Bookmark", JSON.stringify([...oldStorage,second]));
    } else {
      localStorage.setItem("Bookmark", JSON.stringify([second]));
    }
  };

  return (
    <div className="bg-white lg:w-3/12 px-6 py-5 sticky top-0">
      <Profile></Profile>
      <Break handleTime={handleTime} time={breakTime}></Break>
      <Excercise time={time} count={props.count}></Excercise>
    </div>
  );
}

export default Rightside;
