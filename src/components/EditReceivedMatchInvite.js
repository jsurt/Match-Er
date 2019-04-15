import React from "react";
import { RaceOperator } from "rxjs/internal/observable/race";
import { updateMatchInvite, deleteMatch } from "../actions/index";
import { dispatch } from "rxjs/internal/observable/range";
import { connect } from "react-redux";
import Comment from "./Comment";
import "./EditMatch.css";

class EditReceivedMatchInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      scoring: false,
      isWon: true,
      score: "",
      commentSender: this.props.receiverId.username,
      newComment: "",
      datePlayed: "",
      commentError: "",
      scoreError: "",
      datePlayedError: "",
      confirmDelete: false
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.newComment, this.state.score);
  }

  handleDeleteMatch(e) {
    this.setState({ confirmDelete: true });
  }

  handleCancelDelete() {
    this.setState({ confirmDelete: false });
  }

  deleteMatch(event) {
    const { id } = this.props;
    console.log(`Deleting message with id ${id}`);
    this.props.dispatch(deleteMatch(id));
  }

  handleAcceptMatch(event) {
    const { id } = this.props;
    const isAccepted = true;
    const isCompleted = false;
    const comments = [];
    let score = null;
    const datePlayed = null;
    console.log(id, isAccepted, isCompleted, comments, score, datePlayed);
    this.props.dispatch(
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
    const comments = `${this.state.commentSender} said: "${
      this.state.newComment
    }"`;
    let score = null;
    const datePlayed = null;
    console.log(id, isAccepted, isCompleted, comments, score, datePlayed);
    if (this.state.newComment.trim().length === 0) {
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
    console.log(this.props.comments.content);
    const { isAccepted, isCompleted } = this.props;
    const { editing, scoring } = this.state;
    const comments = this.props.comments ? this.props.comments : [];
    const commentsArray = comments.map((comment, index) => {
      return (
        <li className="comment-li" key={index}>
          <Comment {...comment} />
        </li>
      );
    });
    if (!isAccepted) {
      return (
        <React.Fragment>
          <button
            className="match-btn accept-match"
            onClick={e => this.handleAcceptMatch(e)}
            hidden={this.state.confirmDelete}
          >
            <img
              className="edit-match-btn-icon accept-match"
              src="https://image.flaticon.com/icons/svg/747/747580.svg"
              alt="Accept match"
            />
          </button>
          <button
            className="match-btn delete-match"
            onClick={e => this.handleDeleteMatch(e)}
            hidden={this.state.confirmDelete}
          >
            {" "}
            <img
              className="edit-match-btn-icon delete-icon"
              src="https://image.flaticon.com/icons/svg/458/458594.svg"
              alt="Delete invite icon"
            />
          </button>
          <div
            className="confirm-delete-msg"
            hidden={!this.state.confirmDelete}
          >
            Are you sure you want to delete this invite?
            <br />
            <button
              onClick={e => this.deleteMatch(e)}
              className="confirm-delete"
            >
              Yes, Delete
            </button>
            <button
              onClick={e => this.handleCancelDelete(e)}
              className="cancel-delete"
            >
              Cancel
            </button>
          </div>
        </React.Fragment>
      );
    } else if (isAccepted && !isCompleted) {
      if (!editing && !scoring) {
        return (
          <React.Fragment>
            <button
              className="match-btn write-comment-btn"
              type="submit"
              id="msg-reply"
              onClick={e => this.handleMakeComment(e)}
              hidden={this.state.confirmDelete}
            >
              <img
                className="edit-match-btn-icon write-comment-icon"
                src="https://www.flaticon.com/premium-icon/icons/svg/1069/1069210.svg"
                alt="Comment button"
              />
            </button>

            <button
              className="match-btn delete-match"
              type="submit"
              id="msg-delete"
              onClick={e => this.handleDeleteMatch(e)}
              hidden={this.state.confirmDelete}
            >
              <img
                className="edit-match-btn-icon delete-icon"
                src="https://image.flaticon.com/icons/svg/458/458594.svg"
                alt="Delete invite icon"
              />
            </button>
            <div
              className="confirm-delete-msg"
              hidden={!this.state.confirmDelete}
            >
              Are you sure you want to delete this invite?
              <br />
              <button
                onClick={e => this.deleteMatch(e)}
                className="confirm-delete"
              >
                Yes, Delete
              </button>
              <button
                onClick={e => this.handleCancelDelete(e)}
                className="cancel-delete"
              >
                Cancel
              </button>
            </div>
          </React.Fragment>
        );
      } else if (editing && !scoring) {
        return (
          <div>
            <ul className="comment-ul" aria-live="polite">
              {commentsArray}
            </ul>
            <form onSubmit={e => this.handleSendComment(e)}>
              <textarea
                placeholder="Write your comment here"
                name="newComment"
                value={this.state.newComment}
                onChange={e => this.handleChange(e)}
              />
              <div className="comment-error" aria-live="polite">
                {this.state.commentError}
              </div>
              <br />
              <button className="submit-comment-btn" type="submit">
                {" "}
                <img
                  className="submit-comment-icon"
                  src="https://image.flaticon.com/icons/svg/1621/1621913.svg"
                  alt="Send message icon"
                />
              </button>
              <button
                className="cancel-comment-btn"
                onClick={e => this.handleCancelComment(e)}
              >
                {" "}
                <img
                  className="edit-match-btn-icon cancel-comment-icon"
                  src="https://image.flaticon.com/icons/svg/458/458594.svg"
                  alt="Delete friend icon"
                />
              </button>
            </form>
          </div>
        );
      }
    } else if (isCompleted) {
      return (
        <div>
          <button
            className="match-btn delete-match"
            onClick={e => this.handleDeleteMatch(e)}
            hidden={this.state.confirmDelete}
          >
            {" "}
            <img
              className="edit-match-btn-icon delete-icon"
              src="https://image.flaticon.com/icons/svg/458/458594.svg"
              alt="Delete invite icon"
            />
          </button>
          <div
            className="confirm-delete-msg"
            hidden={!this.state.confirmDelete}
          >
            Are you sure you want to delete this invite?
            <br />
            <button
              onClick={e => this.deleteMatch(e)}
              className="confirm-delete"
            >
              Yes, Delete
            </button>
            <button
              onClick={e => this.handleCancelDelete(e)}
              className="cancel-delete"
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }
  }
}

export default connect()(EditReceivedMatchInvite);

{
  /* 
              <button
              type="submit"
              id="msg-reply"
              onClick={e => this.handleWriteScore(e)}
            >
              Score
            </button><div className="won-lost-btn-wrap">
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
            else if (!editing && scoring) {
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
              
              <div aria-live="polite">{this.state.scoreError}</div>
              <div aria-live="polite">{this.state.datePlayedError}</div>
              <button type="submit">Submit</button>
              <button onClick={e => this.handleCancelScore(e)}>Cancel</button>
            </form>
          </div>
        );
      }*/
}
