import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="main">
      <div className="header">
        <img
          src="./images/troll-face.png"
          alt="troll-face meme"
          className="header-image"
        />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">React Course - Project 3</h4>
      </div>
    </div>
  );
}
