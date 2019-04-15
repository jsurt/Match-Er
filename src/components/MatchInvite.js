import React from "react";
import { deleteFriend, sendMatchInvite } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
import "./MatchInvite.css";
//import sendMessage from "../actions/sendMessage";

class MatchInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      message: "",
      messageError: "",
      confirmDelete: false
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

  handleDeleteFriend(e) {
    this.setState({ confirmDelete: true });
  }

  handleCancelDelete() {
    this.setState({ confirmDelete: false });
  }

  deleteFriend(event) {
    const id = this.props._id;
    console.log(id);
    this.props.dispatch(deleteFriend(id));
  }

  render() {
    console.log(this.props._id, this.state.id);
    if (!this.state.editing) {
      return (
        <div className="friends-btn-wrap">
          <button
            className="friend-btns send-msg"
            onClick={e => this.handleInitiateMatchInvite(e)}
            hidden={this.state.confirmDelete}
          >
            <img
              className="friend-btn-icon msg-icon"
              src="https://image.flaticon.com/icons/svg/1388/1388941.svg"
              alt="Write message icon"
            />
          </button>
          <button
            className="friend-btns delete-friend"
            onClick={e => this.handleDeleteFriend(e)}
            hidden={this.state.confirmDelete}
          >
            <img
              className="friend-btn-icon delete-icon"
              src="https://image.flaticon.com/icons/svg/458/458594.svg"
              alt="Delete friend icon"
            />
          </button>
          <div
            className="confirm-delete-msg"
            hidden={!this.state.confirmDelete}
          >
            Are you sure you want to delete this Friend?
            <br />
            <button
              onClick={e => this.deleteFriend(e)}
              className="confirm-delete"
            >
              Yes, Delete
            </button>
            <button
              onClick={e => this.handleCancelDelete(e)}
              className="cancel-delete"
            >
              Cancel
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <form
          className="send-match-invite-form"
          onSubmit={e => this.handleSendMatchInvite(e)}
        >
          <textarea
            className="match-invite-textarea"
            placeholder={`Invite '${this.props.username}' to play a match`}
            value={this.state.message}
            onChange={e => this.handleChange(e)}
          />
          <div>{this.state.messageError}</div>
          <br />
          <button className="submit-match-invite" type="submit">
            <img
              className="submit-match-invite-icon"
              src="https://image.flaticon.com/icons/svg/1621/1621913.svg"
              alt="Send message icon"
            />
          </button>
          <button
            className="friend-btns"
            onClick={e => this.handleCancelMatchInvite(e)}
          >
            <img
              className="friend-btn-icon cancel-msg-icon"
              src="https://image.flaticon.com/icons/svg/458/458594.svg"
              alt="Delete friend icon"
            />
          </button>
        </form>
      );
    }
  }
}

export default connect()(MatchInvite);
