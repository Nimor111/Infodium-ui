import React from "react";

import List from "../List/List";
import LeagueItem from "../LeagueItem/LeagueItem";

const leagueList = props => {
  return (
    <List items={props.leagues} listItem={item => <LeagueItem item={item} />} />
  );
};

export default leagueList;
