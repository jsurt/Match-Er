import React from "react";
import { deleteFriend, sendMessage } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
//import sendMessage from "../actions/sendMessage";

class WriteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: "",
      id: this.props._id
    };
  }

  handleInitiateMessage(event) {
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
    const receiverId = this.state.id;
    const content = this.state.message;
    const date = new Date();
    const dateNeat = date.toLocaleDateString("en-US");
    this.props.dispatch(sendMessage(receiverId, content, dateNeat));
    this.setState({
      editing: false
    });
  }

  handleCancelMessage(event) {
    this.setState({
      editing: false
    });
  }

  handleDeleteFriend(event) {
    const id = this.state.id;
    this.props.dispatch(deleteFriend(id));
  }

  render() {
    if (!this.state.editing) {
      return (
        <div>
          <button
            className="friend-btns send-msg"
            onClick={e => this.handleInitiateMessage(e)}
          >
            <img
              className="friend-btn-icon msg-icon"
              src="https://www.flaticon.com/premium-icon/icons/svg/896/896849.svg"
              alt="Send message icon"
            />
          </button>
          <button
            className="friend-btns delete-friend"
            onClick={e => this.handleDeleteFriend(e)}
          >
            <img
              className="friend-btn-icon delete-icon"
              src="https://www.flaticon.com/premium-icon/icons/svg/484/484662.svg"
              alt="Delete friend icon"
            />
          </button>
        </div>
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

export default connect()(WriteMessage);
