import React, { Component } from "react";
import { connect } from "react-redux";

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import InputAdornment from "@material-ui/core/InputAdornment";

class AddNewItem extends Component {
    handleSave = () => {
        this.props.history.push('/');
    }

    handleReview = () => {
        this.props.history.push('/info');
    }

    
    render() {
        return (
          <div className="logInDiv">
            <Paper>
              <center>
                <h1>Add an Item</h1>
              </center>

              <Grid container>
                <Grid item xs={6} className="imageUploadDiv">
                    <center>
                  <img
                    src="https://image.shutterstock.com/z/stock-photo-sweet-homemade-thanksgiving-pumpkin-pie-ready-to-eat-1185116455.jpg"
                    height="200px"
                    width="200px"
                    alt="Placeholder"
                  />
                  
                    <Link>Upload Photo</Link>
                  </center>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <TextField
                      id="itemNameInput"
                      margin="dense"
                      variant="outlined"
                      placeholder="Item Name"
                    />
                  </div>
                  <div>
                    <TextField
                      id="minBidInput"
                      margin="dense"
                      variant="outlined"
                      placeholder="Minimum Bid"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            $
                          </InputAdornment>
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
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <center>
                    <Button variant="contained">Add Item</Button>
                  </center>
                </Grid>
              </Grid>
            </Paper>

            <div>
              <center>
                <p>All done adding items?</p>
                <p>
                  Save and quite to save your progress and come back to
                  the auction later.
                </p>
                <p>
                  Review auction to view all items and invite friends to
                  participate.
                </p>
              </center>
              <Button className="saveQuitButton" variant="contained" onClick={this.handleSave}>
                Save and Quit
              </Button>
              <Button
                className="reviewAuctionButton"
                variant="contained"
              >
                Review Auction
              </Button>
            </div>
          </div>
        );
    }
}

export default connect()(AddNewItem);