import React, {useState} from 'react';

export default function Star({ color }) {
  const [currentColor] = useState(color);

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="row mx-auto" style={{ alignItems: "center" }}>
        <div
          className="line col-md-1"
          style={{ borderRight: `80px solid ${currentColor}`, height: "4px" }}
        ></div>
        <div className="star col-md-1" style={{color: `${currentColor}`}}>&#9733;</div>
        <div
          className="line col-md-1"
          style={{
            borderRight: `80px solid ${currentColor}`,
            height: "4px",
          }}
        ></div>
      </div>
    </div>
  );
}
