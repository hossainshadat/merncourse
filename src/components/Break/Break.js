import React from "react";
import Time from "../Time/Time";

function Break(props) {
  return (
    <div>
      <h2 className="text-xl font-bold">Add a Break</h2>
      <div className="bg-slate-200 mx-3 my-10 px-3 py-4 flex flex-wrap">
        {props.time.map((time) => (
          <Time handleTime={props.handleTime} key={time.id} time={time}></Time>
        ))}
      </div>
    </div>
  );
}

export default Break;
