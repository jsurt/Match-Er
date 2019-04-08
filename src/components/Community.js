import React from "react";

import { connect } from "react-redux";
import { userLoginSuccess } from "../actions/auth";
import {
  getAllUsers,
  changeCommunityFilter,
  getUserData
} from "../actions/index";
import UserList from "./UserList";
import "./Community.css";

class Community extends React.Component {
  componentDidMount() {
    console.log(this.props.community.filter);
    this.props.dispatch(userLoginSuccess());
    this.props.dispatch(getUserData()).then(() => {
      console.log("Got data");
    });
    this.props.dispatch(getAllUsers()).then(() => console.log("Got all users"));
  }
  handleChangeFilter(event) {
    console.log("Changing filter to" + event.target.value);
    const filter = event.target.value;
    this.props.dispatch(changeCommunityFilter(filter));
  }
  render() {
    return (
      <React.Fragment>
        <header className="community-header">
          <h1 className="community-h1">Community</h1>
          <p className="community-subhead">Sort by state or entire country</p>
        </header>
        <main>
          <div className="user-filter-wrap">
            <span className="radio-btn-wrap state">
              <label htmlFor="state" className="radio-btn-label">
                State
              </label>
              <input
                onClick={e => this.handleChangeFilter(e)}
                type="radio"
                name="button"
                value="state"
                id="state"
                defaultChecked
              />
            </span>
            <span className="radio-btn-wrap country">
              <label htmlFor="country">Country</label>
              <input
                onClick={e => this.handleChangeFilter(e)}
                type="radio"
                name="button"
                value="country"
                id="country"
              />
            </span>
          </div>
          <UserList
            filter={this.props.community.filter}
            users={this.props.community.users}
            userState={this.props.user.location}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ran", state);
  return {
    user: state.user.user,
    community: state.user.community
  };
};

export default connect(mapStateToProps)(Community);
