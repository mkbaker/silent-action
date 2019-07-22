import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

//material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

//SweetAlert2
import Swal from "sweetalert2";

class BioPhotoUpload extends Component {
  state = {
    bio: "",
    photo: ""
  };

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  handleClick = event => {
    if (this.state.bio && this.state.photo) {
      this.props.dispatch({
        type: "CREATE_AUCTION_STEP_TWO",
        payload: {
          auctionName: this.props.reduxState.newAuctionReducer.auctionName,
          auctionOwner: this.props.reduxState.user.id,
          startDate: this.props.reduxState.newAuctionReducer.startDate,
          endDate: this.props.reduxState.newAuctionReducer.endDate,
          bio: this.state.bio,
          photoUrl: this.state.photo
        }
      });
      this.props.history.push("/add-new-item");
    } else {
      Swal.fire({
        type: "error",
        text:
          "Please make sure you've entered all information before continuing."
      });
    }
  };

  //handles photo upload
  handleFinishedUpload = info => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    this.setState({
      ...this.state,
      photo: info.fileUrl
    });
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
            <h1>{this.props.reduxState.newAuctionReducer.auctionName}</h1>
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
            value={this.state.bio}
            onChange={this.handleInputChangeFor("bio")}
          />
          {/* 
          <TextField
            fullWidth
            label="Photo URL"
            variant="outlined"
            value={this.state.photoUrl}
            onChange={this.handleInputChangeFor("photoUrl")}
          /> */}
          {this.state.photo ? (
            <>
              <img
                src={this.state.photo}
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

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(BioPhotoUpload));
