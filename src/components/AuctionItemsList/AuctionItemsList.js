import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//css files
import '../App/App.css';
import './AuctionItemsList.css';

//components
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';

//material-ui
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AuctionItemsList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_AUCTION_ITEMS",
      payload: this.props.reduxState.setSelectedAuctionReducer.id
    });
  }

  handleDelete = event => {
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: [event.target.value]
    });
    //get updated list
    this.props.dispatch({
      type: "GET_AUCTION_ITEMS",
      payload: this.props.reduxState.setSelectedAuctionReducer.id
    });
  };

  handleEdit = event => {
    this.props.dispatch({
      type: "SELECT_ITEM",
      payload: event.target.value
    });
    this.props.history.push("/edit-item/" + event.target.value);
  };

  handleDetail = event => {
    this.props.dispatch({
      type: "SELECT_ITEM",
      payload: event.target.value
    });
    this.props.history.push("/item-detail/" + event.target.value);
  };

  //handle back button
  handleBack = event => {
    this.props.history.push("/add-new-item");
  };

  //handle finish button
  handleFinish = () => {
    this.props.history.push("/view-contacts");
  };
  render() {
    return (
      <div>
        {/* coniditonally render BeneficiaryHeader so it does not show up at '/add-new-item' */}
        {this.props.location.pathname === "/add-new-item" ? (
          <></>
        ) : (
          <div className="beneficiaryDiv">
            <Paper className="beneficiaryContent">
              <img
                className="profileImage"
                src={
                  this.props.reduxState.setSelectedAuctionReducer.photo_url
                }
                alt="Beneficiary"
                height="150px"
                width="auto"
              />

              <div className="beneficiaryBio">
                <h2 className="beneficiaryTitle">
                  {
                    this.props.reduxState.setSelectedAuctionReducer
                      .auction_name
                  }
                </h2>
                {this.props.reduxState.setSelectedAuctionReducer.bio}
              </div>
            </Paper>
          </div>
        )}

        {/* maps each item on a card */}
        <Grid container spacing={2}>
          {this.props.reduxState.setAuctionItemsReducer.map(item => {
            return (
              <Grid item xs={4} key={item.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={item.description}
                      height="150"
                      image={item.photo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}, Current Bid: ${item.currentBid}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  {/* conditionally render buttons for admin */}
                  {this.props.reduxState.user.is_admin ? (
                    <CardActions>
                      <button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={this.handleDelete}
                        value={item.id}
                      >
                        Delete
                      </button>
                      <button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={this.handleEdit}
                        value={item.id}
                      >
                        Edit
                      </button>
                    </CardActions>
                  ) : (
                    // renders for user
                    <CardActions>
                      <button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={this.handleQuickBid}
                        value={item.id}
                      >
                        Quick Bid
                      </button>
                      <button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={this.handleDetail}
                        value={item.id}
                      >
                        Detail
                      </button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* conditionally renders these buttons so they don't appear at route '/add-new-item' or '/view'*/}
        {this.props.location.pathname === "/add-new-item" ? (
          <></>
        ) : (
          <div className="buttonsDiv">
            <Button
              className="addItemButton"
              variant="contained"
              onClick={this.handleBack}
            >
              Back
            </Button>
            <Button
              className="finishButton"
              variant="contained"
              onClick={this.handleFinish}
            >
              Finish
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(AuctionItemsList));