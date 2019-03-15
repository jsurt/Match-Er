import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from "./Landing";
import Navigation from "./Navigation";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Community from "./Community";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/community" component={Community} />
        </React.Fragment>
      </Router>
    );
  }
}
