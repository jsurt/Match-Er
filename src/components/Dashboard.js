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
    localStorage.getItem("");
    this.props.dispatch(getUserData()).then(() => {
      const id = this.props.user.id;
      //console.log(id);
      this.props
        .dispatch(getUserMessages(id))
        .then(() => console.log("Messages fetched"));
    });
  }

  render() {
    console.log("Dashboard has rendered");
    //console.log(this.props.user.friends[0]);
    return (
      <React.Fragment>
        <main className="dashboard-main">
          <ProfileCard
            firstName={this.props.user.firstname}
            lastName={this.props.user.lastname}
            username={this.props.user.username}
            state={this.props.user.state}
          />
          <Friends friends={this.props.user.friends} />
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
