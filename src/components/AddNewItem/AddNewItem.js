import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import ImageUploader from "react-images-upload";

//components
import AuctionItemsList from '../AuctionItemsList/AuctionItemsList';

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";

class AddNewItem extends Component {
  state = {
    pictures: '',
    itemName: "",
    minimumBid: 0,
    itemDescription: "",
    auctionId: this.props.reduxState.setSelectedAuctionReducer.id
  };
  
  //this might change later. getting this info for this.state.addToAuction
  //  componentDidMount() {
  //   this.props.dispatch({
  //     type: "GET_ADMIN_AUCTIONS",
  //     payload: this.props.reduxState.user.id
  //   });
  // }

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
        ...this.state,
        [input]: event.target.value
      }
    );
  };

  //handle "Add Item" button click
  handleAddItem = () => {
                          // console.log(this.state);
                          //dispatch to saga
                          this.props.dispatch({
                            type: "ADD_NEW_ITEM",
                            payload: this.state
                          });
                          this.setState({
                            pictures: "",
                            itemName: "",
                            minimumBid: 0,
                            itemDescription: ""
                          });
                        };

  //handle "Save and Quit" button click
  handleSave = () => {
    this.props.history.push("/");
  };

  //handle "Reivew Auction" button click
  handleReview = () => {
    this.props.history.push("/review");
  };

  //handles image upload for ImageUploader which is not functional at this time
  // onDrop = (picture, file) => {
  //   console.log(file);
  //   this.setState({
  //     pictures: picture
  //   });
  // };

  render() {
    return (
      <div className="logInDiv">
        <Paper>
          <center>
            <h1>
              Add an Item to{" "}
              {this.props.reduxState.setSelectedAuctionReducer.auction_name}
              's Auction
            </h1>
          </center>

          <Grid container>
            <Grid item xs={6} className="imageUploadDiv">
              <center>
                {/* Upload Photo */}
                {/* this does not work */}
                {/* conditionally render preview based on whether local state has an image
                NOT WORKING LIKE I"D EXPECT. FIX THIS LATER */}
                {/* {this.state.pictures ? 
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={false}
                /> 
                :  */}
                {/* //   <ImageUploader */}
                {/* //     withIcon={true}
              //     buttonText="Choose image"
              //     onChange={this.onDrop}
              //     imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              //     maxFileSize={5242880}
              //     singleImage={true}
              //     withPreview={true}
              //   /> 
              // } */}
                <div>
                  <TextField
                    id="photoURL"
                    margin="dense"
                    variant="outlined"
                    placeholder="Photo URL"
                    value={this.state.pictures}
                    onChange={this.handleChangeFor("pictures")}
                  />
                </div>
                <div>
                  {this.state.pictures ? 
                  <img src={this.state.pictures} alt="Your pic here" height="150px" width="150px" />
                  :
                  <></>}
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
                    placeholder="Item Name"
                    value={this.state.itemName}
                    onChange={this.handleChangeFor("itemName")}
                  />
                </div>
                <div>
                  <TextField
                    id="minBidInput"
                    margin="dense"
                    variant="outlined"
                    placeholder="Minimum Bid"
                    value={this.state.minimumBid}
                    onChange={this.handleChangeFor("minimumBid")}
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
                    placeholder="Item Description"
                    margin="dense"
                    value={this.state.itemDescription}
                    onChange={this.handleChangeFor("itemDescription")}
                  />
                </div>
              </center>
            </Grid>

            <Grid item xs={12}>
              <center>
                <Button variant="contained" onClick={this.handleAddItem}>
                  Add Item
                </Button>
              </center>
            </Grid>
          </Grid>
        </Paper>

        {/* below main content */}
        <div>
          <center>
            <p>All done adding items?</p>
            <p>
              Save and quit to save your progress and come back to the
              auction later.
            </p>
            <p>
              Review auction to view all items and invite friends to
              participate.
            </p>
          </center>
          <Button
            className="saveQuitButton"
            variant="contained"
            onClick={this.handleSave}
          >
            Save and Quit
          </Button>
          <Button className="reviewAuctionButton" variant="contained" onClick={this.handleReview}>
            Review Auction
          </Button>
        </div>

        <AuctionItemsList />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(AddNewItem));
