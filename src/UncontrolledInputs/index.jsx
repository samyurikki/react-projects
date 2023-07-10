import React from "react";
import { useState } from "react";

function UncontrolledInputs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log([...formData.entries()]);
    console.log(email);
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
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          name="password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInputs;
