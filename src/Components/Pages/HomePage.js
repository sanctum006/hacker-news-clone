import React from "react";
import Search from "../FormElements/Search";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default HomePage;
