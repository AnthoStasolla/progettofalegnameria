import React from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  return (
    <>
      <nav className="navigation navbar navbar-fixed-top bg-dark">
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
      </nav>
    </>
  );
};

export default Navbar;
