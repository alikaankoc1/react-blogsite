import React from "react";
import "./css/City.css";
function City({ uni }) {
  const { title, decription, count, image } = uni;
  return (
    <div className="city-card">
      <div>
        <img src={image} width={350} height={250} />
        <h4 className="title-rw">{title}</h4>
        <h5 className="description-rw">{decription}</h5>
        <h3 className="count-rw">{count}</h3>
      </div>
    </div>
  );
}

export default City;
