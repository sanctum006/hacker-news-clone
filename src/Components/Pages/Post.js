import React from "react";
import { connect } from "react-redux";
import { fetchPostById } from "../../reduxSlices/posts";
import { processQueryParams } from "../../reduxSlices/routes";

class Post extends React.Component {
  componentDidMount() {
    this.props?.processQueryParams();
    this.props?.fetchPostById();
  }

  render() {
    return (
      <div className="post-container">
        {this.props?.title && <h1>{this.props.title}</h1>}
        {this.props?.title && <p>Points: {this.props.points}</p>}
        <h3>Commnets</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.posts.activePost.title,
    points: state.posts.activePost.points,
    commnets: state.posts.activePost.children,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processQueryParams: () => dispatch(processQueryParams()),
    fetchPostById: () => dispatch(fetchPostById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
