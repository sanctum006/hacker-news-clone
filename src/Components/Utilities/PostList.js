import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
import PostMini from "./PostMini";

class PostList extends React.Component {
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

export default connect(mapStateToProps)(PostList);
