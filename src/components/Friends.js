import React from "react";

import { connect } from "react-redux";

import Friend from "./Friend";
import "./Friends.css";

export default class Friends extends React.Component {
  render() {
    console.log(this.props.friendsCount);
    console.log(this.props.friends);
    const friends = this.props.friends.map((friend, index) => (
      <li key={index} className="friend-li">
        <Friend {...friend} />
        <br />
        <button className="friend-btns send-msg">
          <img
            className="friend-btn-icon msg-icon"
            src="https://www.flaticon.com/premium-icon/icons/svg/896/896849.svg"
            alt="Send message icon"
          />
        </button>
        <button className="friend-btns delete-friend">
          <img
            className="friend-btn-icon delete-icon"
            src="https://www.flaticon.com/premium-icon/icons/svg/484/484662.svg"
            alt="Delete friend icon"
          />
        </button>
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
