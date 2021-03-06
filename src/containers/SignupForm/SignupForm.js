import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import PropTypes from "prop-types";

import { signUp } from "../../services/authService";

class SignupForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    email: "",
    password: "",
    username: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    signUp(this.state)
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
            <Label for="exampleUsername">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
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

export default SignupForm;
