import React from "react";
import { connect } from "react-redux";

import { fetchPostById } from "../../reduxSlices/posts";
import { processQueryParams } from "../../reduxSlices/routes";
import Loader from "./../Utilities/Loader";
import Commnet from "../Utilities/Comment";

class Post extends React.Component {
  componentDidMount() {
    this.props?.processQueryParams();
    this.props?.fetchPostById();
  }

  renderPostContent = () => {
    return (
      <div className="post-container">
        {this.props?.title && <h1>{this.props.title}</h1>}
        {this.props?.title && <p>Points: {this.props.points}</p>}
        <h3>Commnets</h3>
        {this.props?.commnets?.map((commnet) => (
          <Commnet author={commnet.author} text={commnet.text} />
        ))}
      </div>
    );
  };

  render() {
    return (
      <Loader
        status={this.props?.fetchStatus}
        result={this.renderPostContent()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.posts.activePost?.title,
    points: state.posts.activePost?.points,
    commnets: state.posts.activePost?.children,
    fetchStatus: state.posts.fetchActivePostStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processQueryParams: () => dispatch(processQueryParams()),
    fetchPostById: () => dispatch(fetchPostById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
