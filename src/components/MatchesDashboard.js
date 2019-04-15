import React from "react";

import { connect } from "react-redux";
import { getUserData, getUserMatches } from "../actions/index";
import { userLoginSuccess } from "../actions/auth";
import Matches from "./Matches";

class MatchesDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(userLoginSuccess());
    console.log("Getting user data");
    this.props.dispatch(getUserData()).then(() => {
      const id = this.props.user.id;
      console.log(id);
      this.props
        .dispatch(getUserMatches(id))
        .then(() => console.log("Matches fetched"));
    });
  }
  render() {
    const matchData = this.props.match ? this.props.match : [];
    return (
      <div className="background-2">
        <div className="opaque-background-2">
          <header className="matches-header">
            <h1 className="matches-h1">Matches</h1>
          </header>
          <main role="main" className="matches-main">
            <Matches userId={this.props.user.id} matches={matchData.matches} />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ran", state);
  return {
    user: state.user.user,
    match: state.match
  };
};

export default connect(mapStateToProps)(MatchesDashboard);
