import React from "react";
import { RaceOperator } from "rxjs/internal/observable/race";
import { updateMatchInvite, deleteMatch } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
import Comment from "./Comment";

class EditSentMatchInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      scoring: false,
      isWon: true,
      score: "",
      newComment: "",
      datePlayed: "",
      commentError: "",
      scoreError: "",
      datePlayedError: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.newComment, this.state.score);
  }

  handleDeleteMatch(event) {
    const { id } = this.props;
    console.log(`Deleting message with id ${id}`);
    this.props.dispatch(deleteMatch(id));
  }

  handleMakeComment(event) {
    this.setState({
      editing: true
    });
  }

  handleCancelComment(event) {
    this.setState({
      editing: false,
      commentError: ""
    });
  }

  handleSendComment(event) {
    event.preventDefault();
    const { id } = this.props;
    const isAccepted = true;
    const isCompleted = false;
    const comments = this.state.newComment;
    let score = null;
    const datePlayed = null;
    console.log(id, isAccepted, isCompleted, comments, score, datePlayed);
    if (comments.length === 0) {
      return this.setState({ commentError: "Comment cannot be blank" });
    } else {
      this.setState({ newComment: "", commentError: "" });
      return this.props.dispatch(
        updateMatchInvite(
          id,
          isAccepted,
          isCompleted,
          comments,
          score,
          datePlayed
        )
      );
    }
    console.log("sent");
  }

  handleWriteScore(event) {
    this.setState({
      scoring: true
    });
    console.log(this.state.isWon);
  }

  handleWonLostButton(value) {
    console.log(value);
    if (value === "false") {
      return this.setState({ isWon: false });
    } else {
      return this.setState({ isWon: true });
    }
    console.log(this.state.isWon);
  }

  handleCancelScore(event) {
    this.setState({
      scoring: false,
      scoreError: "",
      datePlayedError: ""
    });
  }

  handleSubmitScore(event) {
    event.preventDefault();
    console.log("Submitting score");
    console.log(this.state.score, this.state.isWon);
    const { id } = this.props;
    const isAccepted = true;
    const isCompleted = true;
    const comments = this.state.newComment;
    const score = {
      score: this.state.score,
      isWon: this.state.isWon
    };
    const datePlayed = this.state.datePlayed;
    console.log(id, isAccepted, isCompleted, comments, score, datePlayed);
    if (score.score.length === 0) {
      return this.setState({
        scoreError: "Please enter the score",
        datePlayedError: ""
      });
    } else if (datePlayed.length === 0) {
      return this.setState({
        scoreError: "",
        datePlayedError: "Please the enter date played"
      });
    } else {
      this.setState({ scoreError: "", datePlayedError: "" });
      return this.props.dispatch(
        updateMatchInvite(
          id,
          isAccepted,
          isCompleted,
          comments,
          score,
          datePlayed
        )
      );
    }
  }

  render() {
    console.log(this.props);
    const { isAccepted, isCompleted } = this.props;
    const { editing, scoring } = this.state;
    const comments = this.props.comments ? this.props.comments : [];
    const commentsArray = comments.map((comment, index) => {
      return (
        <li key={index}>
          <Comment {...comment} />
        </li>
      );
    });
    if (!isAccepted) {
      return (
        <React.Fragment>
          <button onClick={e => this.handleDeleteMatch(e)}>
            Delete Invite
          </button>
        </React.Fragment>
      );
    } else if (isAccepted && !isCompleted) {
      if (!editing && !scoring) {
        return (
          <React.Fragment>
            <button
              type="submit"
              id="msg-reply"
              onClick={e => this.handleMakeComment(e)}
            >
              Chat
            </button>
            <button
              type="submit"
              id="msg-reply"
              onClick={e => this.handleWriteScore(e)}
            >
              Score
            </button>
            <button
              type="submit"
              id="msg-delete"
              onClick={e => this.handleDeleteMatch(e)}
            >
              Delete
            </button>
          </React.Fragment>
        );
      } else if (editing && !scoring) {
        return (
          <div>
            <ul aria-live="polite">{commentsArray}</ul>
            <form onSubmit={e => this.handleSendComment(e)}>
              <textarea
                name="newComment"
                value={this.state.newComment}
                onChange={e => this.handleChange(e)}
              />
              <div>{this.state.commentError}</div>
              <br />
              <button type="submit">Send</button>
              <button onClick={e => this.handleCancelComment(e)}>Cancel</button>
            </form>
          </div>
        );
      } else if (!editing && scoring) {
        return (
          <div>
            <form onSubmit={e => this.handleSubmitScore(e)}>
              <label htmlFor="score">Score:</label>
              <input
                name="score"
                id="score"
                onChange={e => this.handleChange(e)}
              />
              <br />
              <label htmlFor="datePlayed">Date:</label>
              <input
                name="datePlayed"
                id="datePlayed"
                onChange={e => this.handleChange(e)}
              />
              <div className="won-lost-btn-wrap">
                <span className="won-wrap">
                  <label htmlFor="won" className="radio-btn-label">
                    Won
                  </label>
                  <input
                    onClick={e => this.handleWonLostButton(e.target.value)}
                    type="radio"
                    name="isWon"
                    value="true"
                    id="won"
                    defaultChecked
                  />
                </span>
                <span className="lost-wrap">
                  <label htmlFor="lost">Lost</label>
                  <input
                    onClick={e => this.handleWonLostButton(e.target.value)}
                    type="radio"
                    name="isWon"
                    value="false"
                    id="lost"
                  />
                </span>
              </div>
              <div aria-live="polite">{this.state.scoreError}</div>
              <div aria-live="polite">{this.state.datePlayedError}</div>
              <button type="submit">Submit</button>
              <button onClick={e => this.handleCancelScore(e)}>Cancel</button>
            </form>
          </div>
        );
      }
    } else if (isCompleted) {
      return (
        <div>
          <button onClick={e => this.handleDeleteMatch(e)}>Delete</button>
        </div>
      );
    }
  }
}

export default connect()(EditSentMatchInvite);
