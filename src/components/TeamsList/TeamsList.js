import React from "react";
import PropTypes from "prop-types";

import List from "../List/List";
import TeamItem from "../TeamItem/TeamItem";

const teamsList = props => {
  return (
    <List items={props.teams} listItem={item => <TeamItem item={item} />} />
  );
};

teamsList.defaultProps = {};

teamsList.propTypes = {};

export default teamsList;
