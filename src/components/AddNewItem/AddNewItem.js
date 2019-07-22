import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

//components
import AuctionItemsList from '../AuctionItemsList/AuctionItemsList';
// import S3Uploader from '../S3Uploader/S3Uploader';

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";

//SweetAlert2
import Swal from 'sweetalert2';

class AddNewItem extends Component {
  state = {
    pictures: "",
    itemName: "",
    minimumBid: 0,
    itemDescription: "",
    auctionId: this.props.reduxState.setSelectedAuctionReducer.id
  };

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  //handle "Add Item" button click
  handleAddItem = () => {
    // console.log(this.state);
    if (
      this.state.pictures &&
      this.state.itemName &&
      this.state.itemDescription
    ) {
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
      Swal.fire({
        type: "success",
        title: "Item added!",
        timer: 1000
      });
    } else {
      Swal.fire({
        type: "error",
        text: "You must enter a photo, name and description for this item."
      });
    }
  };

  //handle "Save and Quit" button click
  handleSave = () => {
    this.props.history.push("/");
  };

  //handle "Reivew Auction" button click
  handleReview = () => {
    this.props.history.push("/review");
  };

  //handles photo upload
  handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    this.setState({
      ...this.state,
      pictures: info.fileUrl
    })
  };

  render() {
    //handles photo upload
    const uploadOptions = {
      server: "http://localhost:5000",
      signingUrlQueryParams: { uploadType: "avatar" }
    };
    const s3Url = "https://silentaction.s3.amazonaws.com";

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
                <div>
                  <h5>Upload a Photo</h5>
                  {this.state.pictures ? (
                    <>
                    <img
                      src={this.state.pictures}
                      alt="Your pic here"
                      height="150px"
                      width="150px"
                    />
                    <br />
                    <button onClick={this.handleChangePhoto}>Change Photo</button>
                    </>
                  ) : (
                    <>
                      <DropzoneS3Uploader
                        onFinish={this.handleFinishedUpload}
                        s3Url={s3Url}
                        maxSize={1024 * 1024 * 5}
                        upload={uploadOptions}
                      />
                    </>
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
          <Button
            className="reviewAuctionButton"
            variant="contained"
            onClick={this.handleReview}
          >
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






      {
        /* Upload Photo */
      }
      {
        /* this does not work */
      }
      {
        /* conditionally render preview based on whether local state has an image
                NOT WORKING LIKE I"D EXPECT. FIX THIS LATER */
      }
      {
        /* {this.state.pictures ? 
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose image"
                  onChange={this.onDrop}
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={false}
                /> 
                :  */
      }
      {
        /* //   <ImageUploader */
      }
      {
        /* //     withIcon={true}
              //     buttonText="Choose image"
              //     onChange={this.onDrop}
              //     imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              //     maxFileSize={5242880}
              //     singleImage={true}
              //     withPreview={true}
              //   /> 
              // } */
      }


      // original photo upload

            {
              /* <div>
                  <TextField
                    id="photoURL"
                    margin="dense"
                    variant="outlined"
                    placeholder="Photo URL"
                    value={this.state.pictures}
                    onChange={this.handleChangeFor("pictures")}
                  />
                </div> */
            }