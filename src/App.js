import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Logout from "./components/Logout/Logout";
import Leagues from "./containers/Leagues/Leagues";
import LeagueDetail from "./containers/LeagueDetail/LeagueDetail";
import SignupForm from "./containers/SignupForm/SignupForm";
import LoginForm from "./containers/LoginForm/LoginForm";

class App extends Component {
  state = {
    authenticated: false,
  };

  isAuthenticated = () => {
    return localStorage.getItem("auth-token");
  };

  componentDidMount() {
    const authenticated = this.isAuthenticated();
    this.setState({ authenticated });
  }

  componentDidUpdate(prevProps, prevState) {
    const authenticated = this.isAuthenticated();
    if (authenticated !== prevState.authenticated) {
      this.setState({ authenticated });
    }
  }

  render() {
    const routes = !this.state.authenticated ? (
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route exact path="/leagues/:id" component={LeagueDetail} />
        <Route exact path="/register" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route exact path="/leagues/:id" component={LeagueDetail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Layout authenticated={this.state.authenticated}>{routes}</Layout>
      </div>
    );
  }
}

export default App;
