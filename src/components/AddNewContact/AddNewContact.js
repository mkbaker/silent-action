import React, { Component } from "react";
import { connect } from "react-redux";

//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";



class AddNewContact extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    }

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
              />
            </div>
            <div>
              <TextField
                id="lastname-input"
                label="Last Name"
                type="name"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="email-input"
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="phone-input"
                value="(1  )    -    "
                label="Phone Number"
                type="phone"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <Button variant="contained">Add Contact</Button>
            </div>
            <div>
              <Link>View All Contacts</Link>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AddNewContact);