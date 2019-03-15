import React from "react";

import "./Message.css";

export default function Message(props) {
  return (
    <React.Fragment>
      <span className="msg-data msg-sender">{props.from}</span>
      <span className="msg-data msg-data-divider"> | </span>
      <span className="msg-data msg-date">{props.sendDate}</span>
      <p className="msg-data  msg-content">{props.content}</p>
    </React.Fragment>
  );
}
