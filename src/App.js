import React, {Component} from "react";

import {Route, Switch} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Leagues from "./containers/Leagues/Leagues";
import LeagueDetail from "./containers/LeagueDetail/LeagueDetail";
import SignupForm from "./containers/SignupForm/SignupForm";

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route exact path="/leagues/:id" component={LeagueDetail} />
        <Route exact path="/register" component={SignupForm} />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
