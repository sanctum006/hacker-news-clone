import React from "react";
import { connect } from "react-redux";
import { fetchPostsBySearchString } from "../../reduxSlices/posts";
import Loader from "./Loader";
import PostMini from "./PostMini";

class PostList extends React.Component {
  componentDidMount() {
    this?.props?.fetchPostsBySearchString();
  }

  render() {
    const posts = this.props.posts?.map((post, index) => (
      <PostMini
        key={post.objectID}
        title={post.title}
        postNo={index + 1}
        createdAt={post.created_at}
        post={post}
      />
    ));

    return (
      <div className="posts-list-container">
        <Loader status={this.props?.status} result={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.posts.fetchAllPostsStatus,
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsBySearchString: () => dispatch(fetchPostsBySearchString()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
