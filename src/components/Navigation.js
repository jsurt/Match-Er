import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <img src="" alt="Match-Er logo" className="logo-img" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
