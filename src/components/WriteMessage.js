import React from "react";

//import sendMessage from "../actions/sendMessage";

export default class WriteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: ""
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
    const msg = this.state.message;
    this.props.dipatch(this.handleSendMessage(msg));
  }

  handleCancelMessage(event) {
    this.setState({
      editing: false
    });
  }

  handleDeleteFriend(event) {
    console.log("Delete friend?");
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
