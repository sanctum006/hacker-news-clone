import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage";
import Post from "../Components/Pages/Post";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};
