import React from "react";

import Friend from "./Friend";
import "./Friends.css";

export default class Friends extends React.Component {
  render() {
    console.log(this.props.friendsCount);
    console.log(this.props.friends);
    const friends = this.props.friends.map((friend, index) => (
      //console.log(friend.username);
      <li key={index} className="friend-li">
        <Friend {...friend} />
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
