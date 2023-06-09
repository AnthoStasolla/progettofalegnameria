import React from "react";
import "./Sidebar.css";
import { SocialBar } from "../links";

const Sidebar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" alt="">
            Navbar
          </a>
          <button
            className="navbar-toggler bottone"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <div
                style={{
                  display: "flex",
                  marginLeft: "1px",
                  justifyContent: "flex-start",
                }}
              >
                <SocialBar />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
