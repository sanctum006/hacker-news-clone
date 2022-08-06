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
    return <>YO!!</>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    processQueryParams: () => dispatch(processQueryParams()),
    fetchPostById: () => dispatch(fetchPostById()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
