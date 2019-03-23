import React from "react";

//import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Friends from "./Friends";
import Inbox from "./Inbox";
import Navigation from "./Navigation";
import ProfileCard from "./ProfileCard";
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.user.fullName);
    return (
      <React.Fragment>
        <Navigation />
        <main className="dashboard-main">
          <ProfileCard
            avatarSrc={this.props.user.avatarSrc}
            fullName={this.props.user.fullName}
            username={this.props.user.username}
            state={this.props.user.state}
          />
          <Friends
            friendsCount={this.props.user.friendsCount}
            friends={this.props.user.friends}
          />
          <Inbox
            messageCount={this.props.user.messageCount}
            messages={this.props.user.messages}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ran", state);
  return {
    user: state.app.user
  };
};

export default connect(mapStateToProps)(Dashboard);
