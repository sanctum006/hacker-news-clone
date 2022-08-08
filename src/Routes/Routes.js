import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage";
import Post from "../Components/Pages/Post";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
