import React from "react";

//import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getUserData, getUserMessages } from "../actions/index";
import { userLoginSuccess } from "../actions/auth";
import Friends from "./Friends";
import Inbox from "./Inbox";
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
        .dispatch(getUserMessages(id))
        .then(() => console.log("Messages fetched"));
    });
  }

  render() {
    console.log("Dashboard has rendered", this.props.user.friends);
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
        <main className="dashboard-main">
          <ProfileCard
            firstName={userData.firstname}
            lastName={userData.lastname}
            username={userData.username}
            location={userData.location}
          />
          <Friends friends={userData.friends} />
          <Inbox
            messageCount={this.props.message.messageCount}
            messages={this.props.message.messages}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ran", state);
  return {
    user: state.user.user,
    message: state.message
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
