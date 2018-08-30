import React, { Component } from "react";

import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    console.log("LOGOUT DID MOUNT");
    localStorage.removeItem("auth-token");
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
