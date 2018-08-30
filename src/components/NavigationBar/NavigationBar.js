import React, { Component, Fragment } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavigationBar.css";

import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const navbarLinks = !this.props.authenticated ? (
      <Fragment>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
      </Fragment>
    ) : (
      <Fragment>
        <NavItem>
          <Link to="/logout" id="logoutLink">
            Logout
          </Link>
        </NavItem>
      </Fragment>
    );

    return (
      <div className="Navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Infodium</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.open} navbar>
            <Nav className="ml-auto" navbar>
              {navbarLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
