import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

//material-ui
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="background">
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}

        <center>
          <form onSubmit={this.login}>
            <Paper className="logInDiv">
              <h1>Login</h1>

              <div>
                <TextField
                  type="text"
                  name="username"
                  variant="outlined"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </div>

              <div>
                <TextField
                  type="password"
                  name="password"
                  variant="outlined"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={this.login}
                >
                  Log In
                </Button>
              </div>
              <center>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    this.props.dispatch({ type: "SET_TO_REGISTER_MODE" });
                  }}
                >
                  Don't have an account? Register here.
                </button>
              </center>
            </Paper>
          </form>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
