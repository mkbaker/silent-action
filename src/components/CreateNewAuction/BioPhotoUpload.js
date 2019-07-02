import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class BioPhotoUpload extends Component {
    handleClick = () => {
        this.props.history.push('/add-new-item')
    }
  render() {
    return (
      <div className="logInDiv">
        <Paper>
          <center>
            <h1>[New Auction Name]</h1>
          </center>

          <TextField
            id="outlined-multiline-static"
            label="Biography"
            multiline
            fullWidth
            rows="4"
            placeholder="Write a short bio about the beneficiary here."
            margin="normal"
            variant="outlined"
          />

          <TextField fullWidth label="Photo URL" variant="outlined" />

          <center>
            <Button variant="outlined" onClick={this.handleClick}>
              Next
            </Button>
          </center>
        </Paper>
      </div>
    );
  }
}

export default withRouter(BioPhotoUpload);
