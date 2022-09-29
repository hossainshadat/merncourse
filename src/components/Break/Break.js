import React from "react";
import Time from "../Time/Time";

function Break(props) {
  console.log(props);
  return (
    <div>
      <h2 className="text-xl font-bold">Add a Break</h2>
      <div className="bg-slate-200 mx-3 my-10 px-3 py-4 flex flex-wrap">
        {props.time.map((time) => (
          <Time handleTime={props.handleTime} key={time.id} time={time}></Time>
        ))}
        {/* <div className="bg-white px-3 py-3 mx-2 rounded-full">
          <h2 className="text-xl font-bold">
            55 <small className="text-xl font-medium ml-[-5px]">s</small>
          </h2>
        </div>
        <div className="bg-white px-3 py-3 mx-2 rounded-full">
          <h2 className="text-xl font-bold">
            55 <small className="text-xl font-medium ml-[-5px]">s</small>
          </h2>
        </div>
        <div className="bg-white px-3 py-3 mx-2 rounded-full">
          <h2 className="text-xl font-bold">
            55 <small className="text-xl font-medium ml-[-5px]">s</small>
          </h2>
        </div>
        <div className="bg-white px-3 py-3 mx-2 rounded-full">
          <h2 className="text-xl font-bold">
            55 <small className="text-xl font-medium ml-[-5px]">s</small>
          </h2>
        </div> */}
      </div>
    </div>
  );
}

export default Break;
