import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import banner from "./rickandmorty-banner.svg";

function Navbar() {
  return (
    <div className="header-container">
      <h1 className="title">Rick and Morty</h1>
      <img className="banner" src={banner} alt="banner"></img>
      <nav>
        <ul className="nav-links-container">
          <li>
            <Link className="link" to="/">
              Characters
            </Link>
          </li>
          <li>
            <Link className="link" to="/episodes">
              Episodes
            </Link>
          </li>
          <li>
            <Link className="link" to="/locations">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
