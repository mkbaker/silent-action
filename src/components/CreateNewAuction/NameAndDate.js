import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//SweetAlert2
import Swal from 'sweetalert2';

class NameAndDate extends Component {
  state = {
    auctionName: "",
    startDate: "",
    endDate: ""
  };

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  handleClick = event => {
    if (this.state.auctionName && this.state.startDate && this.state.endDate) {
      this.props
        .dispatch({
          type: "CREATE_AUCTION_STEP_ONE",
          payload: {
            auctionName: this.state.auctionName,
            startDate: this.state.startDate,
            endDate: this.state.endDate
          }
        })
        this.props.history.push("/create-auction/step2");
    } else {
      Swal.fire({
        type: 'error',
        text: "Please make sure you've entered all information before continuing."
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Create a New Auction</h3>

        <div>
          <TextField
            id="auctionNameInput"
            label="Auction Name"
            margin="normal"
            variant="outlined"
            value={this.state.auctionName}
            onChange={this.handleInputChangeFor("auctionName")}
          />
        </div>

        <div>
          <TextField
            id="startDate"
            helperText="Start Date"
            type="date"
            variant="outlined"
            margin="dense"
            value={this.state.startDate}
            onChange={this.handleInputChangeFor("startDate")}
          />
        </div>

        <div>
          <TextField
            id="endDate"
            helperText="End Date"
            type="date"
            variant="outlined"
            margin="dense"
            value={this.state.endDate}
            onChange={this.handleInputChangeFor("endDate")}
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

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(NameAndDate));
