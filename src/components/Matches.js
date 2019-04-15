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
    const matchCategoryStyle = {
      borderBottomColor: "#ffffff"
    };
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
        <div className="matches-btns-wrap">
          <button
            className="matches-btn pending-matches-btn"
            onClick={() => this.showPending()}
          >
            <img
              style={this.state.showPending ? matchCategoryStyle : undefined}
              className="matches-btn-icon pending-icon"
              src="https://image.flaticon.com/icons/svg/968/968550.svg"
              alt="Pending matches icon"
            />
          </button>
          <button
            className="matches-btn accepted-matches-btn"
            onClick={() => this.showAccepted()}
          >
            <img
              style={this.state.showAccepted ? matchCategoryStyle : undefined}
              className="matches-btn-icon accepted-icon"
              src="https://image.flaticon.com/icons/svg/1669/1669332.svg"
              alt="Pending matches icon"
            />
          </button>
          <button
            className="matches-btn completed-matches-btn"
            onClick={() => this.showComplete()}
          >
            {" "}
            <img
              style={this.state.showComplete ? matchCategoryStyle : undefined}
              className="matches-btn-icon completed-icon"
              src="https://image.flaticon.com/icons/svg/969/969603.svg"
              alt="Write message icon"
            />
          </button>
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
