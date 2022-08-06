import { connect } from "react-redux";

import { DELAY } from "../../constants/posts";
import {
  fetchPostsBySearchString,
  updateSearchString,
} from "../../reduxSlices/posts";
import Debounce from "../Base/Debounce";

class Search extends Debounce {
  constructor(props) {
    super(props);
  }

  searchDebounce = this.debounce(this?.props?.fetchPosts, DELAY);

  handleInputChange = (e) => {
    this.props.updateSearchString({
      value: e.target?.value,
    });
    this?.searchDebounce();
  };

  render() {
    return (
      <input placeholder="TypeSomething" onChange={this.handleInputChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchString: state.posts.searchString,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchString: (payload) => dispatch(updateSearchString(payload)),
    fetchPosts: (payload) => dispatch(fetchPostsBySearchString(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
