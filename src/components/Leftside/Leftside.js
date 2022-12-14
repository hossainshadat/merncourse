import React from "react";
import Card from "../Card/Card";
import LeftsideHeader from "../LeftsideHeader/LeftsideHeader";
import Accordion from "./../Accordion/Accordion";

function Leftside(props) {
  const { data, handleClick } = props;
  // console.log(data);
  return (
    <div className="w-full 2xl:w-9/12 p-3 sm:p-24">
      <LeftsideHeader></LeftsideHeader>

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((data) => (
          <Card handleClick={handleClick} key={data.id} data={data}></Card>
        ))}
      </div>

      <Accordion></Accordion>
    </div>
  );
}

export default Leftside;
