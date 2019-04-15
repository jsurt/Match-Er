import React from "react";
import { addFriend } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
import "./Community.css";

class AddFriend extends React.Component {
  handleAddFriend(event) {
    console.log("Adding friend");
    const user = this.props._user;
    this.props.dispatch(addFriend(user));
  }
  render() {
    console.log(this.props.userId);
    return (
      <React.Fragment>
        <button
          className="add-friend-btn"
          onClick={e => this.handleAddFriend(e)}
          className="add-friend-btn"
        >
          <img
            className="add-friend-icon"
            src="https://image.flaticon.com/icons/svg/747/747968.svg"
            alt="Add as a friend"
          />
        </button>
      </React.Fragment>
    );
  }
}

export default connect()(AddFriend);
