import React, { useEffect } from "react";
import { useState } from "react";
import menu from "./data";
import MenuItems from "./menuItems";

function MenuCategories() {
  const [activetab, setActiveTab] = useState("all");
  const [items, filterItems] = useState(menu);

  useEffect(() => {
    if (activetab !== "all") {
      const newData = menu.filter((each) => each.category === activetab);
      filterItems(newData);
    }
  }, [activetab]);

  return (
    <>
      <ul>
        <li key="all">
          <button onClick={() => setActiveTab("all")}>all</button>
        </li>
        <li key="breakfast">
          <button onClick={() => setActiveTab("breakfast")}>breakfast</button>
        </li>
        <li key="lunch">
          <button onClick={() => setActiveTab("lunch")}>lunch</button>
        </li>
        <li key="shakes">
          <button onClick={() => setActiveTab("shakes")}>shakes</button>
        </li>
      </ul>
      <ul>
        {items.map((each) => {
          return <MenuItems {...each} key={each.id} />;
        })}
      </ul>
    </>
  );
}

export default MenuCategories;
