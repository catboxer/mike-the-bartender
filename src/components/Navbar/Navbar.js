import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="mike the bartender logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            store
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            blog
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            recipes
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            trivia
          </a>
        </li>
      </ul>
    </nav>
  );
}
