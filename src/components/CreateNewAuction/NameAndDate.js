import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NameAndDate extends Component {

    handleClick = () => {
        this.props.history.push("/create-auction/step2");
    }
 
    render(){
        return (
          <div>
            <h3>Create a New Auction</h3>

            <div>
              <TextField
                id="auctionNameInput"
                label="Auction Name"
                margin="normal"
                variant="outlined"
              />
            </div>

            <div>
              <TextField
                id="startDate"
                label="Start Date"
                type="date"
                defaultValue="2020-01-01"
              />
            </div>

            <div>
              <TextField
                id="endDate"
                label="End Date"
                type="date"
                defaultValue="2020-01-01"
              />
            </div>

            <div>
              <Button variant="contained" onClick={this.handleClick}>
                Create Auction
              </Button>
            </div>
          </div>
        );
    }
}

export default withRouter(NameAndDate);