import React from "react";
import { RaceOperator } from "rxjs/internal/observable/race";
import { sendMessage } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";

class ReplyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: "",
      id: this.props._id
    };
  }

  handleReplyMessage(event) {
    this.setState({
      editing: true
    });
  }

  handleSendMessage(event) {
    console.log("Sending message");
  }

  handleCancelMessage(event) {
    this.setState({
      editing: false
    });
  }

  handleDeleteMessage(event) {
    console.log("Delete message?");
  }

  render() {
    console.log(this.state.id);
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
          <textarea />
          <br />
          <button onClick={e => this.handleSendMessage(e)}>Send</button>
          <button onClick={e => this.handleCancelMessage(e)}>Cancel</button>
        </div>
      );
    }
  }
}

export default connect()(ReplyMessage);
