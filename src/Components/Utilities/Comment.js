import React from "react";

class Commnet extends React.Component {
  render() {
    return (
      <div className="comment-container">
        <div className="comment-left-container">
          <img
            src="https://avatarfiles.alphacoders.com/148/thumb-148182.png"
            width={40}
            alt="profile"
          />
        </div>
        <div className="comment-right-container">
          <h3>{this.props.author}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Commnet;
