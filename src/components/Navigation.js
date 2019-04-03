import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { dispatch } from "rxjs/internal/observable/range";
import { userLoginSuccess } from "../actions/auth";
import "./Navigation.css";

class Navigation extends React.Component {
  handleLogout(event) {
    console.log("logging out");
    //this.props.history.("/login");
    this.props.dispatch(logout());
  }
  render() {
    const loggedIn = this.props.auth.loggedIn;
    console.log(this.props.auth.loggedIn);
    if (!loggedIn) {
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
    } else {
      console.log("User logged in");
      return (
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">
                <img src="" alt="Match-Er logo" className="logo-img" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/community">Community</Link>
            </li>
            <li className="nav-item" onClick={e => this.handleLogout(e)}>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("Map state to props ran");
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navigation);
