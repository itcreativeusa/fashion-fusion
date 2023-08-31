import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

function Nav(props) {
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user;

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar">
          <li className="li">
            {user && (
              <h2 id="welcomeMessage">
                Welcome, {user.firstName} {user.lastName}
              </h2>
            )}
          </li>
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
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>

      <h1 className="flex-row px-1 Title">
        <Link className="pulse" to="/">
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
