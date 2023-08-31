import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav(props) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="li">
            <Link to="/orderHistory">
              <button className="button">View Orders</button>
              </Link>
          </li>
          <li className="li">
            <a href="/" onClick={() => Auth.logout()}>
              <button className="button">Logout</button>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <div className="toggler">
                  <p className="toggler--light">Light</p>
                  <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                  >
                    <div className="toggler--slider--circle"></div>
                  </div>
                  <p className="toggler--dark">Dark</p>
                </div>
              </li>
              <li>
                <Link to="/signup">
                  <button className="button">SIGN UP</button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="button">LOG IN</button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  }

  return (
    <header className={props.darkMode ? "dark header" : "header"}>
      <nav className={props.darkMode ? "dark" : ""}>
        {showNavigation()}
      </nav>

      <h1 className="flex-row px-1 title">
        <Link className="pulse" to="/">
          <span role="img" aria-label="dress">
          
          </span>
          FASHION FUSION
        </Link>
      </h1>
    </header>
  );
}

export default Nav;
