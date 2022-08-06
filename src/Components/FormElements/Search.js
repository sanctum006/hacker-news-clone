import { TextField } from "@mui/material";
import { connect } from "react-redux";

import { DELAY } from "../../constants/posts";
import {
  fetchPostsBySearchString,
  updateSearchString,
} from "../../reduxSlices/posts";
import Debounce from "../Base/Debounce";

class Search extends Debounce {
  searchDebounce = this.debounce(this?.props?.fetchPosts, DELAY);

  handleInputChange = (e) => {
    this.props.updateSearchString({
      value: e.target?.value,
    });
    this?.searchDebounce();
  };

  render() {
    return (
      <div id="search-box-container">
        <TextField
          id="search-box"
          placeholder="Search"
          value={this.props?.searchString}
          onChange={this.handleInputChange}
        />
      </div>
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
