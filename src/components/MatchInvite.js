import React from "react";
import { deleteFriend, sendMatchInvite } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
//import sendMessage from "../actions/sendMessage";

class MatchInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: "",
      messageError: ""
    };
  }

  handleInitiateMatchInvite(event) {
    this.setState({
      editing: true
    });
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSendMatchInvite(event) {
    event.preventDefault();
    const receiverId = this.props._id;
    const message = this.state.message;
    const date = new Date();
    const sentAt = date.toLocaleDateString("en-US");
    if (message.length === 0) {
      return this.setState({ messageError: "Your message cannot be blank" });
    } else {
      this.setState({ editing: false });
      return this.props.dispatch(sendMatchInvite(receiverId, message, sentAt));
    }
  }

  handleCancelMatchInvite(event) {
    this.setState({
      editing: false,
      message: "",
      messageError: ""
    });
  }

  handleDeleteFriend(event) {
    const id = this.props._id;
    console.log(id);
    this.props.dispatch(deleteFriend(id));
  }

  render() {
    console.log(this.props._id, this.state.id);
    if (!this.state.editing) {
      return (
        <div>
          <button
            className="friend-btns send-msg"
            onClick={e => this.handleInitiateMatchInvite(e)}
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
          <form onSubmit={e => this.handleSendMatchInvite(e)}>
            <textarea
              placeholder={`Invite '${this.props.username}' to play a match`}
              value={this.state.message}
              onChange={e => this.handleChange(e)}
            />
            <div>{this.state.messageError}</div>
            <br />
            <button type="submit">Send</button>
            <button onClick={e => this.handleCancelMatchInvite(e)}>
              Cancel
            </button>
          </form>
        </div>
      );
    }
  }
}

export default connect()(MatchInvite);
