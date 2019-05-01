import React from "react";

import { connect } from "react-redux";

import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    console.log(this.props.userId);
    console.log(this.props.matches);
    const fullName = `${this.props.firstname} ${this.props.lastname}`;
    let lost = 0;
    let won = 0;
    const completedMatches = [];
    this.props.matches.forEach(match => {
      console.log(match.score);
      if (match.score) {
        completedMatches.push(match);
      }
      return completedMatches;
    });
    completedMatches.forEach(match => {
      if (match.senderId._id === this.props.userId) {
        if (match.score.isWon) {
          won++;
        } else {
          lost++;
        }
      } else {
        if (!match.score.isWon) {
          won++;
        } else {
          lost++;
        }
      }
    });
    console.log(won, lost);
    return (
      <React.Fragment>
        <section className="user-panel" role="region">
          <div className="user-info-div">
            <span className="user-info this-user-whole-name">{fullName}</span> |{" "}
            <span className="user-info this-username">
              {this.props.username}
            </span>
            <p className="user-info this-user-state">{this.props.location}</p>
            <p className="user-info this-user-record">
              Record: {won} - {lost}
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect()(ProfileCard);
