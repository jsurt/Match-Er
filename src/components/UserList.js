import React from "react";

import User from "./User";
import AddFriend from "./AddFriend";
import "./UserList.css";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitTo: 10
    };
  }
  render() {
    console.log(this.props);
    const { filter, userState } = this.props;
    console.log(filter, userState);
    const users = this.props.users.users ? this.props.users.users : [];
    console.log(users);
    if (filter === "state") {
      console.log("Filtering by state");
      const filteredUsers = users.filter((user, index) => {
        return userState === user.location;
      });
      let usersArray = filteredUsers.map((user, index) => (
        <li key={index} className="community-li">
          <User {...user} />
          <br />
          <AddFriend _user={user} />
        </li>
      ));
      return (
        <React.Fragment>
          <ul className="community-ul">{usersArray}</ul>
        </React.Fragment>
      );
    } else {
      console.log("Filtering by country");
      let usersArray = users.map((user, index) => (
        <li key={index} className="community-li">
          <User {...user} />
          <br />
          <AddFriend userId={this.props.userId} _user={user} />
        </li>
      ));
      return (
        <React.Fragment>
          <ul className="community-ul">{usersArray}</ul>
        </React.Fragment>
      );
    }
  }
}
