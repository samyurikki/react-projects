import React from "react";

function MenuItems({ title, desc, price }) {
  return (
    <li>
      <img
        src="https://github.com/john-smilga/react-course-v3/blob/main/04-fundamental-projects/05-menu/starter/public/images/item-10.jpeg?raw=true"
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
      <h5>{title}</h5>
      <p>{desc}</p>
      <p>{price}</p>
    </li>
  );
}

export default MenuItems;
