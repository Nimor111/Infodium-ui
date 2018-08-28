import React from "react";
import "./List.css";

import {ListGroup} from "reactstrap";

const list = props => {
  const {items} = props;

  return (
    <ListGroup>
      {items && items.data ? (
        items.data.map(item => {
          return <div key={item.id}>{props.listItem(item)}</div>;
        })
      ) : (
        <h1 className="display-5 loadingText">Loading...</h1>
      )}
    </ListGroup>
  );
};

export default list;
