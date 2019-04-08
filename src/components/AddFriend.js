import React from "react";
import { addFriend } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";

class AddFriend extends React.Component {
  handleAddFriend(event) {
    console.log("Adding friend");
    const user = this.props._user;
    this.props.dispatch(addFriend(user));
  }
  render() {
    console.log(this.props._user);
    return (
      <React.Fragment>
        <button onClick={e => this.handleAddFriend(e)} className="add-friend">
          Add as Friend
        </button>
      </React.Fragment>
    );
  }
}

export default connect()(AddFriend);
