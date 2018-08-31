import React, { Component } from "react";
import PropTypes from "prop-types";

import { getLeagueTeams } from "../../services/leagueService";

import TeamsList from "../../components/TeamsList/TeamsList";

class LeagueTeams extends Component {
  state = {
    teams: [],
  };

  componentDidMount = async () => {
    const id = this.props.leagueId;
    const teams = await getLeagueTeams(id);
    this.setState({ teams });
  };

  render() {
    return (
      <div>
        <TeamsList teams={this.state.teams} />
      </div>
    );
  }
}

export default LeagueTeams;
