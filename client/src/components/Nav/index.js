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
          <li>
            <div className="toggler">
              <p className="toggler--light">Light</p>
              <div className="toggler--slider" onClick={props.toggleDarkMode}>
                <div className="toggler--slider--circle"></div>
              </div>
              <p className="toggler--dark">Dark</p>
            </div>
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
            <ul className="all-buttons">
              <li>
                <div className="toggler">
                  <p className="toggler--light toggler-label">Light</p>
                  <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                  >
                    <div className="toggler--slider--circle"></div>
                  </div>
                  <p className="toggler--dark toggler-label">Dark</p>
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
      <h1 button type="button" onClick="window.location.reload()" className="Title">
        <Link className="pulse" to="/">
          <span role="img" aria-label="dress">
          
          </span>
          FASHION FUSION
        </Link>
      </h1>
      <nav className={props.darkMode ? "dark" : ""}>
        {showNavigation()}
      </nav>

    </header>
  );
}

export default Nav;
