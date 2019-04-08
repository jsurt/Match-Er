import React from "react";
import { RaceOperator } from "rxjs/internal/observable/race";
import { sendMessage, deleteMessage } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";

class ReplyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: "",
      id: this.props._id,
      senderId: this.props.senderId
    };
  }

  handleReplyMessage(event) {
    this.setState({
      editing: true
    });
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSendMessage(event) {
    console.log(`Sending message to ${this.state.senderId}`);
    const receiverId = this.state.senderId;
    const content = this.state.message;
    const date = new Date();
    const dateNeat = date.toLocaleDateString("en-US");
    this.props.dispatch(sendMessage(receiverId, content, date));
    this.setState({
      editing: false
    });
  }

  handleCancelMessage(event) {
    this.setState({
      editing: false
    });
  }

  handleDeleteMessage(event) {
    const id = this.state.id;
    console.log(`Deleting message with id ${id}`);
    this.props.dispatch(deleteMessage(id));
  }

  render() {
    console.log(this.props.senderId);
    if (!this.state.editing) {
      return (
        <React.Fragment>
          <button
            type="submit"
            id="msg-reply"
            onClick={e => this.handleReplyMessage(e)}
          >
            Reply
          </button>
          <button
            type="submit"
            id="msg-delete"
            onClick={e => this.handleDeleteMessage(e)}
          >
            Delete
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <textarea onChange={e => this.handleChange(e)} />
          <br />
          <button onClick={e => this.handleSendMessage(e)}>Send</button>
          <button onClick={e => this.handleCancelMessage(e)}>Cancel</button>
        </div>
      );
    }
  }
}

export default connect()(ReplyMessage);
