import React from "react";

function Excercise() {
  return (
    <div>
      <h2 className="text-xl font-bold">Excercise Details</h2>
      <div className="bg-slate-200 px-3 py-3 mx-2 mt-6 mb-5 flex items-center text-center justify-between">
        <h2 className="text-xl font-bold">Excercise Time</h2>
        <p className="text-xl text-slate-300">2000 seconds</p>
      </div>
      <div className="bg-slate-200 px-3 py-3 mx-2 flex items-center text-center justify-between">
        <h2 className="text-xl font-bold">Break Time</h2>
        <p className="text-xl text-slate-300 ">15 seconds</p>
      </div>

      <div className="card-actions mt-12">
        <button className="btn btn-primary w-full">Activity Completed</button>
      </div>
    </div>
  );
}

export default Excercise;

{
  /* <small className="text-xs text-slate-300 ml-[-7px]">kg</small> */
}
