import React from "react";

import { connect } from "react-redux";

import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    console.log(this.props.matches);
    const fullName = `${this.props.firstname} ${this.props.lastname}`;
    let lost = 0;
    let won = 0;
    const lostMatches = this.props.matches.forEach(match => {
      if (match.score === null) {
        console.log(match.receiverId._id);
        return match;
      } else if (this.props.userId === match.receiverId._id) {
        if (!match.score.isWon) {
          console.log("won");
        } else {
          console.log("lost");
          lost++;
        }
      } else if (this.props.userId === match.senderId._id) {
        if (!match.score.isWon) {
          console.log("lost");
          lost++;
        } else {
          console.log("won");
        }
      }
      console.log(lost);
      return lost;
    });
    const wonMatches = this.props.matches.forEach(match => {
      let lost = 0;
      let won = 0;
      if (match.score === null) {
        console.log(match.receiverId._id);
        return match;
      } else if (this.props.userId === match.receiverId._id) {
        if (!match.score.isWon) {
          console.log("won");
          won++;
        } else {
          console.log("lost");
        }
      } else if (this.props.userId === match.senderId._id) {
        if (!match.score.isWon) {
          console.log("lost");
        } else {
          console.log("won");
          won++;
        }
      }
      console.log(lost);
      return won;
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
