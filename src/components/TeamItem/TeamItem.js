import React, { Fragment } from "react";

import { ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const teamItem = props => {
  const { item } = props;

  const styles = {
    link: {
      textDecoration: "none",
    },
  };

  return (
    <Fragment>
      <Link to={`teams/${item.id}`} style={styles.link}>
        <ListGroupItem key={item.id} color="success">
          <div className="loadingText">
            {item.name} - {item.tla}
          </div>
        </ListGroupItem>
      </Link>
    </Fragment>
  );
};

export default teamItem;
