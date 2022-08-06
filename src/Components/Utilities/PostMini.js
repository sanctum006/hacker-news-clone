import React from "react";

class PostMini extends React.Component {
  render() {
    return (
      <div className="post-mini-container">
        <div className="post-mini-left-container">{this.props.postNo}</div>
        <div className="post-mini-right-container">
          <h4>{this.props.title}</h4>
          <p>{this.props.createdAt}</p>
        </div>
      </div>
    );
  }
}

export default PostMini;
