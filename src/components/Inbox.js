import React from "react";
import Message from "./Message";
import ReplyMessage from "./ReplyMessage";
import "./Inbox.css";

export default class Inbox extends React.Component {
  render() {
    const messages = this.props.messages.map((msg, index) => (
      <li key={index} className="message-li">
        <Message {...msg} />
        <ReplyMessage />
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
