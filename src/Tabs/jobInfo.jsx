import React from "react";
import Duties from "./duties";

function JobInfo({ title, company, dates, duties }) {
  return (
    <li>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties} />
    </li>
  );
}

export default JobInfo;
