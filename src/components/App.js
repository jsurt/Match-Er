import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import MatchesDashboard from "./MatchesDashboard";
import Community from "./Community";
import "./App.css";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Route path="*" component={Landing} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/matches" component={MatchesDashboard} />
          <Route exact path="/community" component={Community} />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("Map state to props ran");
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);

{
  /* <Route exact path="/dashboard" component={Dashboard} />
<Route exact path="/matches" component={MatchesDashboard} />
<Route exact path="/community" component={Community} /> */
}

{
  /* <PrivateRoute
authed={this.props.auth.loggedIn}
path="/dashboard"
component={Dashboard}
/>
<PrivateRoute
authed={this.props.auth.loggedIn}
path="/matches"
component={MatchesDashboard}
/>
<PrivateRoute
authed={this.props.auth.loggedIn}
path="/community"
component={Community}
/> */
}
