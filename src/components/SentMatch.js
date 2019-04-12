import React from "react";

export default class SentMatch extends React.Component {
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
    const receiverId = this.props.receiverId._id;
    const senderId = this.props.senderId._id;
    const { username } = this.props.receiverId;
    if (!isAccepted) {
      return (
        <React.Fragment>
          <p>{username} has not accepted your invitation yet</p>
          <p>Sent: {sentAt}</p>
        </React.Fragment>
      );
    } else if (isAccepted && !isCompleted) {
      return (
        <React.Fragment>
          <p>
            {username} has accepted your invite. Comment to arrange a time and
            place.
          </p>
        </React.Fragment>
      );
    } else if (isCompleted) {
      const giveOutcome = (username, score) => {
        if (score.isWon) {
          return `You defeated ${username} ${score.score}`;
        } else {
          return `${username} defeated you ${score.score}`;
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