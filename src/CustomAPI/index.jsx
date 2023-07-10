import { createContext, useContext, useState } from "react";
import NavLinks from "./navLinks";

export const navbarContext = createContext();

//CUSTOM HOOKS

export const useContextApi = () => useContext(navbarContext);
//console.log(navbarContext);

const CustomApi = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <navbarContext.Provider value={{ user, logoutUser }}>
      <nav>
        <h3>CONTEXT API</h3>
        <NavLinks />
      </nav>
    </navbarContext.Provider>
  );
};

export default CustomApi;
