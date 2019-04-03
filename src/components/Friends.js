import React from "react";
import { connect } from "react-redux";
import Friend from "./Friend";
import WriteMessage from "./WriteMessage";
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
        <WriteMessage _id={friend._id} />
      </li>
    ));
    return (
      <React.Fragment>
        <section className="friends-section">
          <h3 className="friends-h3">Friends</h3>
          <span className="friends-count"> ({friendsCount})</span>
          <ul className="friends-list">{friendsArray}</ul>
        </section>
      </React.Fragment>
    );
  }
}
