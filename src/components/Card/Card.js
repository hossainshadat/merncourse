import React from "react";

function Card(props) {
  const { data } = props;

  const handleClick = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-3 pt-3">
          <img src={data.picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold">{data.title}</h2>
          <p>{data.desc.slice(0, 120)}</p>
          <p className="font-semibold">Time required: {data.time}s</p>
          <div className="card-actions pt-3 ">
            <button
              onClick={() => handleClick(data)}
              className="btn btn-primary w-full"
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
