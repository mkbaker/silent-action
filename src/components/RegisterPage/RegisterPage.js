import React, { Component } from "react";
import { connect } from "react-redux";

//material-ui
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";

class RegisterPage extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  };

  registerUser = event => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        }
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}

        <form className="logInDiv">
          <Paper className="registerPaper">
            <h1>Welcome to Silent Action.</h1>
            <p>
              Silent Action is a community-based platform to raise funds for
              persons in your community facing medical expenses. Easily
              start a new auction with these steps:
            </p>

            <ol>
              <li>Create an account. </li>
              <li>
                Create an auction. We'll help walk you through the steps.
              </li>
              <li>Invite friends and family to participate.</li>
              <li>All proceeds go to the beneficiary.</li>
            </ol>

            <center>
              <div>
                <TextField
                  id="firstname-input"
                  label="First Name"
                  type="name"
                  variant="outlined"
                  value={this.state.firstname}
                  onChange={this.handleInputChangeFor("firstname")}
                />
              </div>

              <div>
                <TextField
                  id="lastname-input"
                  label="Last Name"
                  type="name"
                  variant="outlined"
                  value={this.state.lastname}
                  onChange={this.handleInputChangeFor("lastname")}
                />
              </div>

              <div>
                <TextField
                  id="email-input"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor("email")}
                />
              </div>

              <div>
                <TextField
                  id="username-input"
                  type="text"
                  label="Username"
                  variant="outlined"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </div>

              <div>
                <TextField
                  id="password-input"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </div>

              <div>
                <Button variant="contained" onClick={this.registerUser}>
                  Register
                </Button>
              </div>
            </center>

            <center>
              <button
                type="button"
                className="link-button"
                onClick={() => {
                  this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
                }}
              >
                Already have an account? Login here.
              </button>
            </center>
          </Paper>
        </form>

        {/* GIVEN CODE  */}
        {/* <form onSubmit={this.registerUser}> */}
        {/* <h1>Register User</h1> */}
        {/* <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {
              this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
            }}
          >
            Login
          </button>
        </center> */}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(RegisterPage);
