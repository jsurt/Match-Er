import React from "react";

import "./Friend.css";

export default function Friend(props) {
  console.log(props);
  return (
    <React.Fragment>
      <span className="friend-info friend-name">{`${props.firstname} ${
        props.lastname
      }`}</span>
      <span className="friend-info-divider"> | </span>
      <span className="friend-info friend-username">{props.username}</span>
      <span className="friend-info friend-state">{props.state}</span>
    </React.Fragment>
  );
}
