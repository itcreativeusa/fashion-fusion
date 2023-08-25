import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="li">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="li">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <header>
          <nav>
            <ul className="navbar">
              <li className="li">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="li">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  }

  return (
    <header className="header">
      <nav>{showNavigation()}</nav>

      <h1 className="title">
        <Link to="/">
          <span role="img" aria-label="dress">
            👗
          </span>
          Fashion Fusion
        </Link>
      </h1>
    </header>
      
  );
}

export default Nav;
