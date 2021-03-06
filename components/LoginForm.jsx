import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { login } from '../services/authService';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    //console.log("Submitted");
    const { data } = this.state;
    try {
      const { data: jwt } = await login(data.username, data.password)
      console.log(jwt)
      localStorage.setItem('token', jwt);
      window.location = '/'
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data;
        this.setState({ errors })
      }
    }
  };

  render() {
    return (
      <div className="container">
        <br/>
        <br/>
        <h1>Login</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <br/>
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
