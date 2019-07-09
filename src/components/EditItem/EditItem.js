import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';


//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";

class EditItem extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    currentBid: "",
    photo: "",
    belongs_to: ""
  };

  // constructor(props) {
  //   //super(props) is to access this.props inside constructor
  //   super(props);
  //   // Don't call this.setState() here!
  //     this.state = ({
  //     id: this.props.reduxState.selectedItemReducer.id,
  //     name: this.props.reduxState.selectedItemReducer.name,
  //     description: this.props.reduxState.selectedItemReducer.description,
  //     currentBid: this.props.reduxState.selectedItemReducer.currentBid,
  //     photo: this.props.reduxState.selectedItemReducer.photo,
  //     belongs_to: this.props.reduxState.selectedItemReducer.belongs_to
  //   });
  //   // This binding is necessary to make `this` work in the callback
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  // componentDidMount() {
  //   this.setState({
  //     id: this.props.reduxState.selectedItemReducer.id,
  //     name: this.props.reduxState.selectedItemReducer.name,
  //     description: this.props.reduxState.selectedItemReducer.description,
  //     currentBid: this.props.reduxState.selectedItemReducer.currentBid,
  //     photo: this.props.reduxState.selectedItemReducer.photo,
  //     belongs_to: this.props.reduxState.selectedItemReducer.belongs_to
  //   });
  // }

  handleBack = () => {
    this.props.history.push("/add-new-item");
  };

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.props.reduxState.selectedItemReducer,
      [input]: event.target.value
    });
    // console.log(input, event.target.value);
  };

  //handle "Update Item" button click
  handleUpdateItem = () => {
    if (this.state.id) {
    console.log(this.state);
    } else {
      alert('Please enter some information to update.');
    }
    //dispatch to saga
    this.props.dispatch({
      type: "UPDATE_ITEM",
      payload: this.state
    });
    // this.setState({
    //   pictures: "",
    //   itemName: "",
    //   minimumBid: 0,
    //   itemDescription: ""
    // });
  };
  render() {
    return (
      <div className="logInDiv">
        <BeneficiaryHeader />

        <Grid container>
          <Grid item xs={6}>
            <center>
              <h2>ID: {this.props.reduxState.selectedItemReducer.id}</h2>
              {/* photo */}
              <div>
                <TextField
                  id="photoURL"
                  margin="dense"
                  variant="outlined"
                  placeholder={this.props.reduxState.selectedItemReducer.photo}
                  value={this.state.photo || ""}
                  onChange={this.handleChangeFor("photo")}
                  helperText="Photo Url"
                />
              </div>
              {/* conditionally renders image if photo exits */}
              <div>
                {this.state.photo ? (
                  <img
                    src={this.state.photo}
                    alt="Your pic here"
                    height="150px"
                    width="150px"
                  />
                ) : (
                  <img
                    src={this.props.reduxState.selectedItemReducer.photo}
                    alt="Your pic here"
                    height="150px"
                    width="150px"
                  />
                )}
              </div>
            </center>
          </Grid>

          <Grid item xs={6}>
            <center>
              <div>
                <TextField
                  id="itemNameInput"
                  margin="dense"
                  variant="outlined"
                  helperText="Item Name"
                  placeholder={this.props.reduxState.selectedItemReducer.name}
                  value={this.state.name}
                  onChange={this.handleChangeFor("name")}
                />
              </div>
              <div>
                <TextField
                  id="minBidInput"
                  margin="dense"
                  variant="outlined"
                  helperText="Current Bid"
                  placeholder={
                    this.props.reduxState.selectedItemReducer.currentBid
                  }
                  value={this.state.minimumBid}
                  onChange={this.handleChangeFor("currentBid")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                />
              </div>
              <div>
                <TextField
                  id="itemDescriptionInput"
                  variant="outlined"
                  multiline
                  rows="4"
                  margin="dense"
                  helperText="Description"
                  placeholder={
                    this.props.reduxState.selectedItemReducer.description
                  }
                  value={this.state.description}
                  onChange={this.handleChangeFor("description")}
                />
              </div>
            </center>
          </Grid>

          <Grid item xs={12}>
            <center>
              <Button variant="contained" onClick={this.handleUpdateItem}>
                Update Item
              </Button>
            </center>
          </Grid>
        </Grid>

        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(EditItem));
