import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../App/App.css';

//components
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';

//material-ui
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
// import Paper from "@material-ui/core/Paper";
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
    // console.log('clicked delete, id:', event.target.value )
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
    this.props.history.push("/edit-item/" + event.target.value);
  };

  //handle back button 
  handleBack = event => {
    this.props.history.push("/add-new-item");
  };

  //handle finish button
  handleFinish = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>

          {/* coniditonally render BeneficiaryHeader so header only shows up on Review and Edit pages */}
        {this.props.location.pathname === '/add-new-item' ? 
        <></> :
        <BeneficiaryHeader />}

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
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* conditionally renders these buttons so they don't appear at route '/add-new-item'*/}
        {this.props.location.pathname === '/add-new-item' ?  
        <></> 
        :
        <div>
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
        }
        
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(AuctionItemsList));