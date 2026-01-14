import React from "react";

function City({ uni }) {
  const { title, decription, count, image } = uni;
  return (
    <div className="cityCard">
      <div>
        <img src={image} width={350} height={250} />
        <h4>{title}</h4>
        <h5>{decription}</h5>
        <h3>{count}</h3>
      </div>
    </div>
  );
}

export default City;
