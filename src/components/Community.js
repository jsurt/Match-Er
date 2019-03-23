import React from "react";

import { connect } from "react-redux";

import UserList from "./UserList";
import "./Community.css";

class Community extends React.Component {
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
                type="radio"
                name="button"
                value="state"
                id="state"
                defaultChecked
              />
            </span>
            <span className="radio-btn-wrap country">
              <label htmlFor="country">Country</label>
              <input type="radio" name="button" value="country" id="country" />
            </span>
          </div>
          <UserList
            filter={this.props.community.filter}
            users={this.props.community.users}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  community: state.app.community
});

export default connect(mapStateToProps)(Community);
