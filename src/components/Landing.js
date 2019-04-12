import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-background">
          <div className="opaque-background">
            <header className="landing-header" role="banner">
              <h1 className="landing-head">Match-Er</h1>
              <p className="landing-subhead">
                Find tennis players in your area. Friend them. Invite them to a
                match
              </p>
              <Link to="/signup">
                <button className="landing-btn landing-signup">Signup</button>
              </Link>
              <span> </span>
              <Link to="/login">
                <button className="landing-btn landing-login">Login</button>
              </Link>
            </header>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
