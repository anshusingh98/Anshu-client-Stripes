import React from "react";
import logo from "../../assets/logo.png";

const OptionNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light "
      style={{ marginTop: "40px" }}
    >
      <div className="container ">
      <img  className="logo mx-2" src={logo} alt="logo"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mx-2">
            <p>Laptops</p>
          </li>
          <li className="nav-item mx-2">
            <p>Desktop PCs</p>
          </li>
          <li className="nav-item dropdown mx-2">
            <p>Networking Devices</p>
          </li>
          <li className="nav-item mx-2">
            <p>Printer&Scanner</p>{" "}
          </li>
          <li className="nav-item mx-2">
            <p>PC parts</p>{" "}
          </li>
          <li className="nav-item mx-2">
            <p>All other parts</p>{" "}
          </li>
          <li className="nav-item mx-2">
            <p> Repaire</p>{" "}
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default OptionNav;
