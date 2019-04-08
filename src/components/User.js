import React from "react";

import "./User.css";

export default function User(props) {
  return (
    <React.Fragment>
      <span className="user-info user-name">{`${props.firstname} ${
        props.lastname
      }`}</span>
      <span className="user-info-divider"> | </span>
      <span className="user-info user-username">{props.username}</span>
      <span className="user-info user-state">{props.location}</span>
    </React.Fragment>
  );
}
