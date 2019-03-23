import React from "react";

import Message from "./Message";
import "./Inbox.css";

export default class Inbox extends React.Component {
  render() {
    const messages = this.props.messages.map((msg, index) => (
      <li key={index} className="message-li">
        <Message {...msg} />
        <button type="submit" id="msg-reply">
          Reply
        </button>
        <button type="submit" id="msg-delete">
          Delete
        </button>
      </li>
    ));
    return (
      <React.Fragment>
        <section className="inbox-section">
          <h3 className="messages-h3">Inbox</h3>
          <span className="messages-count"> ({this.props.messageCount})</span>
          <ul className="messages-list">{messages}</ul>
        </section>
      </React.Fragment>
    );
  }
}
