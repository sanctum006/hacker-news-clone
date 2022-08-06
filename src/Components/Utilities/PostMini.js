import React from "react";

class PostMini extends React.Component {
  getDate = (date) => {
    return date?.slice(0, 10);
  };

  getTitle = (title) => {
    return title?.length < 40 ? title : title?.slice(0, 40) + "...";
  };

  render() {
    return this.props.title ? (
      <div className="post-mini-container">
        <div className="post-mini-left-container">{this.props.postNo}</div>
        <div className="post-mini-right-container">
          <h4>{this.getTitle(this.props.title)}</h4>
          <p>Created At: {this.getDate(this.props.createdAt)}</p>
        </div>
      </div>
    ) : null;
  }
}

export default PostMini;
