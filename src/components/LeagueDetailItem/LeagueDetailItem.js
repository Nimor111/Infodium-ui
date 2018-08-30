import React from "react";
import PropTypes from "prop-types";

import { Jumbotron } from "reactstrap";

const LeagueDetailItem = props => {
  const { league } = props;

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{league.name}</h1>
        <p className="lead">Country: {league.country}</p>
        <hr className="my-2" />
        <p>
          Current matchday:
          {league.currentMatchday ? league.currentMatchday : " N/A"}
        </p>
      </Jumbotron>
    </div>
  );
};

LeagueDetailItem.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  currentMatchday: PropTypes.string,
};

export default LeagueDetailItem;
