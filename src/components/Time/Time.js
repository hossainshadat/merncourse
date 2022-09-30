import React from "react";

function Time(props) {
  // console.log(props);
  return (
    <div>
      <div
        style={{ backgroundColor: "gray" }}
        className="bg-white px-3 py-3 mx-2 rounded-full"
      >
        <button
          onClick={() => props.handleTime(props.time.count)}
          className="text-xl font-bold"
        >
          {props.time.count}
        </button>
      </div>
    </div>
  );
}

export default Time;
