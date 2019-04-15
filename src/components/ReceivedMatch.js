import React from "react";
import "./EditMatch.css";

export default class ReceivedMatch extends React.Component {
  render() {
    console.log(this.props);
    const {
      isAccepted,
      isCompleted,
      score,
      message,
      sentAt,
      datePlayed
    } = this.props;
    // const receiverId = this.props.receiverId._id;
    // const senderId = this.props.senderId._id;
    const { username } = this.props.senderId ? this.props.senderId : "";
    if (!isAccepted) {
      return (
        <React.Fragment>
          <p>{username} invited you to play</p>
          <p>Received: {sentAt}</p>
          <p>{message}</p>
        </React.Fragment>
      );
    } else if (isAccepted && !isCompleted) {
      return (
        <React.Fragment>
          <p>
            You accepted {username}'s invite. Comment to arrange a time and
            place.
          </p>
        </React.Fragment>
      );
    } else if (isCompleted) {
      console.log(score.score);
      const giveOutcome = (username, score) => {
        if (score.isWon) {
          return `You lost to ${username} ${score.score}`;
        } else {
          return `You won against ${username} ${score.score}`;
        }
      };
      return (
        <React.Fragment>
          <p>Match played on {datePlayed}</p>
          <p>{giveOutcome(username, score)}</p>
        </React.Fragment>
      );
    }
  }
}
