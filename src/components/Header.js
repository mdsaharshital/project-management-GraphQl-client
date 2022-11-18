import React from "react";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <div className="d-flex">
              <img src={logo} alt="logo" className="mr-2 w-25" />
              <h2 className="mt-2">ProjectMgmt</h2>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
