import React from "react";

import User from "./User";
import "./UserList.css";

export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map((user, index) => (
      <li key={index} className="community-li">
        <User {...user} />
        <br />
        <button className="add-friend">Add as Friend</button>
      </li>
    ));
    return (
      <React.Fragment>
        <ul className="community-ul">{users}</ul>
      </React.Fragment>
    );
  }
}
