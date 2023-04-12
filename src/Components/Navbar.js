import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { SocialBar } from "../links";
import { useGlobalContext } from "../context";
import { MdOutlineCarpenter } from "react-icons/md";

const Navbar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  return (
    <>
      <nav className="navigation navbar navbar-fixed-top bg-dark">
        <div className="icon-navbar">
          <MdOutlineCarpenter
            style={{
              width: "25px",
              height: "25px",
              color: "#f4a460",
            }}
          />
        </div>
        <a href="/" className="brand-name">
          FRANCO STASOLLA
        </a>

        <button
          className="hamburger"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars className="bottone" />
        </button>
        <div
          className={
            isSidebarOpen ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul
            className="nav-links"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">Chi siamo</a>
            </li>
            <li>
              <a href="/#gallery">Galleria</a>
            </li>
            <li>
              <a href="/#contact">Contattaci</a>
            </li>
          </ul>
        </div>

        <div className="social-links">
          <SocialBar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
