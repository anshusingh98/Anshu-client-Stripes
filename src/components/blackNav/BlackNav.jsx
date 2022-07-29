import React from "react";
import "./blackNav.css";
const BlackNav = () => {
  return (
    <div>
      <nav className="navbar main-navbar navbar-expand-lg fixed-top px-0 py-0">
        <div className="title-bar">
          <span className="left-title">
            <p style={{ fontSize: "1vw" }}>Mon-Thu 9:00AM-5:30PM</p>
          </span>
          <span className="right-title">
            <p style={{ fontSize: "1vw" }}>Call Us:(00)12345678</p>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default BlackNav;
