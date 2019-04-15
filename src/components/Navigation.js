import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { dispatch } from "rxjs/internal/observable/range";
import { userLoginSuccess } from "../actions/auth";
import "./Navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onDashboard: true,
      onMatches: false,
      onCommunity: false
    };
  }
  handleLogout(event) {
    console.log("logging out");
    //this.props.history.("/login");
    this.props.dispatch(logout());
  }

  toDashboard() {
    this.setState({
      onDashboard: true,
      onMatches: false,
      onCommunity: false
    });
  }

  toMatches() {
    this.setState({
      onDashboard: false,
      onMatches: true,
      onCommunity: false
    });
  }

  toCommunity() {
    this.setState({
      onDashboard: false,
      onMatches: false,
      onCommunity: true
    });
  }

  render() {
    console.log(window.location.pathname);
    const selectedLinkStyle = {
      borderBottom: "1px solid #007b22"
    };
    const unselectedLinkStyle = {
      borderBottom: "1px solid #007b22",
      paddingBottom: "1px"
    };
    const loggedIn = this.props.auth.loggedIn;
    console.log(this.props.auth.loggedIn);
    if (!loggedIn) {
      return <noscript />;
    } else {
      console.log("User logged in");
      return (
        <nav role="navigation">
          <ul className="nav-list">
            <li className="nav-item" onClick={() => this.toDashboard()}>
              <Link
                className="nav-link"
                to="/dashboard"
                style={
                  window.location.pathname === "/dashboard"
                    ? selectedLinkStyle
                    : undefined
                }
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item" onClick={() => this.toMatches()}>
              <Link
                className="nav-link"
                to="/matches"
                style={
                  window.location.pathname === "/matches"
                    ? selectedLinkStyle
                    : undefined
                }
              >
                Matches
              </Link>
            </li>
            <li className="nav-item" onClick={() => this.toCommunity()}>
              <Link
                className="nav-link"
                to="/community"
                style={
                  window.location.pathname === "/community"
                    ? selectedLinkStyle
                    : undefined
                }
              >
                Community
              </Link>
            </li>
            <li className="nav-item" onClick={e => this.handleLogout(e)}>
              <Link className="logout-link-nav nav-link" to="/login">
                Logout
              </Link>
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
