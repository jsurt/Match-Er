import React from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import MatchInvite from "./MatchInvite";
import "./Friends.css";

export default class Friends extends React.Component {
  render() {
    //console.log(this.props.friends ? this.props.friends : []);
    const friends = this.props.friends ? this.props.friends : [];
    const friendsCount = friends.length;
    const friendsArray = friends.map((friend, index) => (
      <li key={index} className="friend-li">
        <Friend {...friend} />
        <br />
        <MatchInvite _id={friend._id} username={friend.username} />
      </li>
    ));
    return (
      <React.Fragment>
        <section className="friends-section" role="region">
          <h3 className="friends-h3">Friends</h3>
          <span className="friends-count"> ({friendsCount})</span>
          <ul className="friends-list" aria-live="polite">
            {friendsArray}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
