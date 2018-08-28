import React, { Component } from "react";
import PropTypes from "prop-types";

import LeagueDetailItem from "../../components/LeagueDetailItem/LeagueDetailItem";

import { getLeague } from "../../services/leagueService";

class LeagueDetail extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    league: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getLeague(id)
      .then(league => this.setState({ league }))
      .catch(err => console.log(err));
  }

  render() {
    const { league } = this.state;

    return (
      <div>
        {league && league.data ? (
          <LeagueDetailItem league={league.data} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default LeagueDetail;
