import React, {Fragment} from "react";

import NavigationBar from "../NavigationBar/NavigationBar";

const layout = props => (
  <Fragment>
    <NavigationBar />
    {props.children}
  </Fragment>
);

export default layout;
