import React, { useState } from "react";

function ControlledInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   const [shipping, setShipping] = useState(true);

  const handleChange = (e) => {
    // console.log(e.target.name, " ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Controlled Input</h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        {/* <label htmlFor="freeShipping" className="form-label">
          FreeShipping
        </label>
        <input
          type="checkbox"
          id="freeShipping"
          className="form-input"
          onChange={() => setShipping(!shipping)}
          checked={shipping}
        /> */}

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ControlledInput;
