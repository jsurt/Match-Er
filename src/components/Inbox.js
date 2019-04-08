import React from "react";
import Message from "./Message";
import ReplyMessage from "./ReplyMessage";
import "./Inbox.css";

export default class Inbox extends React.Component {
  render() {
    const messages = this.props.messages ? this.props.messages : [];
    const messageCount = messages.length;
    const messagesArray = messages.map((message, index) => (
      <li key={index} className="message-li">
        <Message {...message} />
        <ReplyMessage _id={message.id} senderId={message.senderId._id} />
      </li>
    ));
    return (
      <React.Fragment>
        <section className="inbox-section">
          <h3 className="messages-h3">Inbox</h3>
          <span className="messages-count"> ({messageCount})</span>
          <ul className="messages-list">{messagesArray}</ul>
        </section>
      </React.Fragment>
    );
  }
}
