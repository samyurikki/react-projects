import React from "react";

function Title(props) {
  return (
    <div>
      <h2 className="title">{props.text || "Default Text"}</h2>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
