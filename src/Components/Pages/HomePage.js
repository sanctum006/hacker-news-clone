import React from "react";
import Search from "../FormElements/Search";
import PostList from "../Utilities/PostList";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <Search />
        <PostList />
      </div>
    );
  }
}

export default HomePage;
