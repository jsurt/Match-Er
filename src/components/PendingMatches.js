import React from "react";
import { connect } from "react-redux";
import ReceivedMatch from "./ReceivedMatch";
import SentMatch from "./SentMatch";
import EditReceivedMatchInvite from "./EditReceivedMatchInvite";
import EditSentMatchInvite from "./EditSentMatchInvite";

export default class PendingMatches extends React.Component {
  render() {
    console.log(this.props);
    const { userId } = this.props;
    const matches = this.props.matches ? this.props.matches : [];
    const matchCount = matches.length;
    const matchesArray = matches.map((match, index) => {
      console.log(match.receiverId._id);
      if (userId === match.receiverId._id) {
        return (
          <li key={index} className="message-li">
            <ReceivedMatch {...match} />
            <EditReceivedMatchInvite {...match} />
          </li>
        );
      } else {
        return (
          <li key={index} className="message-li">
            <SentMatch {...match} />
            <EditSentMatchInvite {...match} />
          </li>
        );
      }
    });
    return (
      <section className="inbox-section" role="region">
        <span className="messages-count"> ({matchCount})</span>
        <ul className="messages-list" aria-live="polite">
          {matchesArray}
        </ul>
      </section>
    );
  }
}

//export default connect()(ReceivedInvites);
