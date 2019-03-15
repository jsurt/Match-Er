import React from "react";

import "./ProfileCard.css";

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="user-panel">
          <img src={this.props.avatarSrc} alt="User's avatar" />
          <div className="user-info-div">
            <p className="user-info user-whole-name">{this.props.fullName}</p>
            <p className="user-info username">{this.props.username}</p>
            <p className="user-info user-state">{this.props.state}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
