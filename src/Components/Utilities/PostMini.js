import React from "react";
import { Link, withRouter } from "react-router-dom";
import { customLinkStyle } from "./../../constants/styles";

class PostMini extends React.Component {
  getDate = (date) => {
    return date?.slice(0, 10);
  };

  getTitle = (title) => {
    return title?.length < 30 ? title : title?.slice(0, 30) + "...";
  };

  render() {
    return this.props.title ? (
      <Link
        to={`/post?postId=${this.props?.post.objectID}`}
        style={customLinkStyle}
      >
        <div className="post-mini-container" onClick={this.handleClick}>
          <div className="post-mini-left-container">{this.props.postNo}</div>
          <div className="post-mini-right-container">
            <h4>{this.getTitle(this.props.title)}</h4>
            <p>Created At: {this.getDate(this.props.createdAt)}</p>
          </div>
        </div>
      </Link>
    ) : null;
  }
}

export default withRouter(PostMini);
