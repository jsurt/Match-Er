import React from "react";
import { connect } from "react-redux";
import PendingMatches from "./PendingMatches";
import AcceptedMatches from "./AcceptedMatches";
import CompletedMatches from "./CompletedMatches";
import "./Matches.css";

export default class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPending: true,
      showAccepted: false,
      showCompleted: false
    };
  }

  showPending() {
    this.setState({
      showPending: true,
      showAccepted: false,
      showComplete: false
    });
  }

  showAccepted() {
    this.setState({
      showPending: false,
      showAccepted: true,
      showComplete: false
    });
  }

  showComplete() {
    this.setState({
      showPending: false,
      showAccepted: false,
      showComplete: true
    });
  }

  render() {
    console.log(this.props);
    const matches = this.props.matches ? this.props.matches : [];
    const userId = this.props.userId;
    console.log(matches, userId);
    const pendingMatches = matches.filter((match, index) => {
      return !match.isAccepted;
    });
    const acceptedMatches = matches.filter((match, index) => {
      return match.isAccepted && !match.isCompleted;
    });
    const completedMatches = matches.filter((match, index) => {
      return match.isCompleted;
    });
    const { showPending, showAccepted, showCompleted } = this.state;
    let visibleComponent;
    if (showPending) {
      visibleComponent = (
        <React.Fragment>
          <PendingMatches userId={userId} matches={pendingMatches} />
        </React.Fragment>
      );
    } else if (showAccepted) {
      visibleComponent = (
        <React.Fragment>
          <AcceptedMatches userId={userId} matches={acceptedMatches} />
        </React.Fragment>
      );
    } else {
      visibleComponent = (
        <React.Fragment>
          <CompletedMatches userId={userId} matches={completedMatches} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div>
          <button onClick={() => this.showPending()}>Pending</button>
          <button onClick={() => this.showAccepted()}>Accepted</button>
          <button onClick={() => this.showComplete()}>Complete</button>
        </div>
        <section>{visibleComponent}</section>
      </React.Fragment>
    );
  }
}

{
  /* <section role="region">
<h2>Pending</h2>
<PendingMatches userId={userId} matches={pendingMatches} />
</section>
<section role="region">
<h2>Accepted</h2>
<AcceptedMatches userId={userId} matches={acceptedMatches} />
</section>
<section role="region">
<h2>Complete</h2>
<CompletedMatches userId={userId} matches={completedMatches} />
</section> */
}
