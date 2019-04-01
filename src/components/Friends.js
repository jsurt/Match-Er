import React from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import WriteMessage from "./WriteMessage";
import "./Friends.css";

export default class Friends extends React.Component {
  render() {
    console.log(this.props.user.friends);
    console.log(this.props.user.friends);
    const friendsCount = this.props.user.friends.length;
    const friends = this.props.friends.map((friend, index) => (
      <li key={index} className="friend-li">
        <Friend {...friend} />
        <br />
        <WriteMessage />
      </li>
    ));
    return (
      <React.Fragment>
        <section className="friends-section">
          <h3 className="friends-h3">Friends</h3>
          <span className="friends-count"> ({this.props.friendsCount})</span>
          <ul className="friends-list">{friends}</ul>
        </section>
      </React.Fragment>
    );
  }
}
