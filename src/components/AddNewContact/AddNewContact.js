import React, { Component } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";



class AddNewContact extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    admin_id: this.props.reduxState.user.id
  };

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  //handle "Add Contact" button click
  handleAddContact = () => {
    // console.log(this.state);
    // dispatch to saga
    this.props.dispatch({
      type: "ADD_NEW_CONTACT",
      payload: this.state
    });
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    });
  };

  render() {
    return (
      <div>
        <h3>Add a New Contact</h3>
        <div>
          <TextField
            id="firstname-input"
            label="First Name"
            type="name"
            margin="normal"
            variant="outlined"
            value={this.state.firstname}
            onChange={this.handleChangeFor("firstname")}
          />
        </div>
        <div>
          <TextField
            id="lastname-input"
            label="Last Name"
            type="name"
            margin="normal"
            variant="outlined"
            value={this.state.lastname}
            onChange={this.handleChangeFor("lastname")}
          />
        </div>
        <div>
          <TextField
            id="email-input"
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleChangeFor("email")}
          />
        </div>
        <div>
          <TextField
            id="phone-input"
            label="Phone Number"
            type="phone"
            margin="normal"
            variant="outlined"
            value={this.state.phone}
            onChange={this.handleChangeFor("phone")}
          />
        </div>
        <div>
          <Button variant="contained" onClick={this.handleAddContact}>
            Add Contact
          </Button>
        </div>
        <div>
          <Link component={RouterLink} to="/view-contacts">
            View All Contacts
          </Link>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState
});

export default connect(mapReduxStateToProps)(AddNewContact);