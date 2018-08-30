import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import PropTypes from "prop-types";

import { login } from "../../services/authService";

class LoginForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    email: "",
    password: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    login(this.state)
      .then(token => {
        localStorage.setItem("auth-token", token.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} method="POST">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
