import React, { useState } from "react";
import "./data";
import personData from "./data";
import Person from "./person";
function BirthdayBuddy() {
  const [data, setData] = useState(personData);
  return (
    <div>
      <h3>{data.length} Birthdays Today</h3>
      <ul>
        {data.map((each) => (
          <Person key={each.id} {...each} />
        ))}
      </ul>
      <button type="button" onClick={() => setData([])}>
        Clear All
      </button>
    </div>
  );
}

export default BirthdayBuddy;
