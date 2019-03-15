import React from "react";

import "./User.css";

export default function User(props) {
  return (
    <React.Fragment>
      <span className="user-info user-name">{props.name}</span>
      <span className="user-info-divider"> | </span>
      <span className="user-info user-username">{props.username}</span>
      <span className="user-info user-state">{props.state}</span>
    </React.Fragment>
  );
}
