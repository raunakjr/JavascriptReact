import React from "react";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="Title">
          <a href="index.html">Where in the world?</a>
        </h2>
        <p className="theme-changer">
          <i className="fa-regular fa-moon"></i>
          <span className="DMtext">Dark Mode</span>
        </p>
      </div>
    </header>
  );
}
