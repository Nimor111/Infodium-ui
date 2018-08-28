import React from "react";
import PropTypes from "prop-types";

import {Jumbotron} from "reactstrap";

const LeagueDetailItem = props => {
  const {league} = props;

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{league.name}</h1>
        <p className="lead">{league.country}</p>
        <hr className="my-2" />
        <p>{league.currentMatchday}</p>
      </Jumbotron>
    </div>
  );
};

LeagueDetailItem.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  currentMatchday: PropTypes.string
};

export default LeagueDetailItem;
