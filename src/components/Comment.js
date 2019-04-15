import React from "react";

export default class componentName extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.content);
    // const comments = this.props.map((comment, index) => {
    //   return <span key={index}>{...comment}</span>;
    // });
    return <span className="comment-span">{this.props.content}</span>;
  }
}
