import React from "react";

function Person({ name, age, image }) {
  return (
    <li style={{ display: "flex" }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </li>
  );
}

export default Person;
