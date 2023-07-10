import React, { useContext, useState } from "react";
import { navbarContext, useContextApi } from ".";

function UserContainer() {
  const value = useContextApi();
  console.log(value);
  const { user, logoutUser } = value;
  // return "hello world";

  return (
    <div>
      <p>{user ? `Hey, there ${user.name}` : ""}</p>
      <button type="button" onClick={logoutUser}>
        {value.user ? "Logout" : "Please Login"}
      </button>
    </div>
  );
}

export default UserContainer;
