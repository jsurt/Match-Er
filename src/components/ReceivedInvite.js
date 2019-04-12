import React from "react";

import "./ReceivedInvite.css";

export default function ReceivedInvite(props) {
  console.log(props);
  return (
    <React.Fragment>
      <span className="msg-data msg-sender">
        From: {`${props.senderId.firstname} ${props.senderId.lastname}`}
      </span>
      <span className="msg-data msg-data-divider"> | </span>
      <span className="msg-data msg-date">{props.sentAt}</span>
      <p className="msg-data  msg-content">{props.message}</p>
    </React.Fragment>
  );
}
