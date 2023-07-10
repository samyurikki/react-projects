import React from "react";
import Title from "./title";
import MenuCategories from "./menu";

function Menu() {
  return (
    <div>
      <Title text={"Menu"} className="title title-underline" />
      <MenuCategories />
    </div>
  );
}

export default Menu;
