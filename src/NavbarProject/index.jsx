import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import "./index.css";

function Navbar() {
  const [showItems, setShowItems] = useState(false);
  const linkRefContainer = useRef(null);
  const linksRef = useRef(null);

  const togglieItems = () => {
    //console.log(linkRefContainer.current);
    //console.log(linksRef.current.getBoundingClientRect());
    setShowItems(!showItems);
  };

  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{ color: "#000000", fontFamily: "Roboto", fontWeight: "bold" }}
        >
          Coding <span style={{ color: "#aaff00" }}>Addict</span>
        </h2>
        <button
          type="button"
          style={{ border: "none", width: "30px", height: "30px" }}
          onClick={togglieItems}
        >
          <FaBars className="nav-toggle" />
        </button>
      </div>
      <div
        className="nav-container"
        style={{
          height: showItems
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : "0px",
        }}
        ref={linkRefContainer}
      >
        <ul ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} style={{ textTransform: "capitalize" }}>
                <a
                  href={url}
                  style={{ alignSelf: "flex-start", color: "#000000" }}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
