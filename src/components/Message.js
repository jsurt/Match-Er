import React from "react";

import "./Message.css";

export default function Message(props) {
  console.log(props);
  return (
    <React.Fragment>
      <span className="msg-data msg-sender">{`${props.senderId.firstname} ${
        props.senderId.lastname
      }`}</span>
      <span className="msg-data msg-data-divider"> | </span>
      <span className="msg-data msg-date">{props.sentAt}</span>
      <p className="msg-data  msg-content">{props.content}</p>
    </React.Fragment>
  );
}
