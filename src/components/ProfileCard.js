import React from "react";

import { connect } from "react-redux";

import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    console.log(this.props.fullName);
    return (
      <React.Fragment>
        <section className="user-panel">
          <img src={this.props.avatarSrc} alt="User's avatar" />
          <div className="user-info-div">
            <p className="user-info this-user-whole-name">
              {this.props.fullName}
            </p>
            <p className="user-info this-username">{this.props.username}</p>
            <p className="user-info this-user-state">{this.props.location}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect()(ProfileCard);
