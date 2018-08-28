import React, {Component} from "react";
import PropTypes from "prop-types";

import {getLeagues} from "../../services/leagueService";

import LeagueList from "../../components/LeagueList/LeagueList";

class Leagues extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  state = {
    leagues: []
  };

  componentDidMount() {
    getLeagues()
      .then(leagues => this.setState({leagues}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <LeagueList leagues={this.state.leagues} />
      </div>
    );
  }
}

export default Leagues;
