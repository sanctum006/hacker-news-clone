import React from "react";
import { connect } from "react-redux";
import { processQueryParams } from "../../reduxSlices/routes";

class Post extends React.Component {
  componentDidMount() {
    this.props?.processQueryParams();
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
