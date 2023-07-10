import React from "react";
import { useState } from "react";
import { data } from "../../Data/data";
import { AiFillDelete } from "react-icons/ai";

function AddUser() {
  const [name, setName] = useState("");
  const [namesList, setList] = useState(data);
  let num = data.length;

  const handleChange = (e) => {
    e.preventDefault();
    if (!name) return;
    setList((prevList) => [...prevList, { id: Date.now(), name }]);
    setName("");
  };

  const removeUser = (id) => {
    setList((prevList) => {
      const newList = prevList.filter((user) => user.id != id);
      return newList;
    });
  };
  return (
    <form className="form" onSubmit={handleChange}>
      <h3>AddUser</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>

        <h2>Users</h2>
        <ul>
          {namesList.map((each, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{each.name}</p>
              <AiFillDelete onClick={() => removeUser(each.id)} />
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default AddUser;
