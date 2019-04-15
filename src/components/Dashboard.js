import React from "react";

//import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getUserData, getUserMatches } from "../actions/index";
import { userLoginSuccess } from "../actions/auth";
import Friends from "./Friends";
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";
import "./Dashboard.css";

class Dashboard extends React.Component {
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
    console.log("Dashboard has rendered", this.props.match);
    const userData = this.props.user
      ? this.props.user
      : {
          firstname: "",
          lastname: "",
          username: "",
          location: "",
          friends: ""
        };
    return (
      <React.Fragment>
        <div className="background-2">
          <div className="opaque-background-2">
            <main className="dashboard-main" role="main">
              <ProfileCard
                userId={userData.id}
                firstname={userData.firstname}
                lastname={userData.lastname}
                username={userData.username}
                location={userData.location}
                matches={matchData.matches}
              />
              <Friends friends={userData.friends} />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ran", state);
  return {
    match: state.match,
    user: state.user.user
  };
};

export default connect(mapStateToProps)(Dashboard);

/*<Friends
    friendsCount={this.props.user.friendsCount}
    friends={this.props.user.friends}
  />
  <Inbox
    messageCount={this.props.user.messageCount}
    messages={this.props.user.messages}
  />*/

/*           
  <Inbox
    messageCount={this.props.message.messageCount}
    messages={this.props.message.messages}
  />
  */
