import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./index.css";

function Nav(props) {
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
    <header className={props.darkMode ? "dark header" : "header"}>
      <nav className={props.darkMode ? "dark": ""}>
        {showNavigation()}
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>

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
