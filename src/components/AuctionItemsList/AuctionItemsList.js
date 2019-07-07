import React, { Component } from "react";
import { connect } from "react-redux";
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
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AuctionItemsList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_AUCTION_ITEMS',
            payload: this.props.reduxState.setSelectedAuctionReducer.id})
    }
    handleDelete = (event) => {
        // console.log('clicked delete, id:', event.target.value )
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: [event.target.value]
        })
        //get updated list
         this.props.dispatch({
           type: "GET_AUCTION_ITEMS",
           payload: this.props.reduxState.setSelectedAuctionReducer.id
         });
    }
    render() {
        return (
          <div>
              <BeneficiaryHeader /> 
            
            {/* maps each item on a card */}
            <Grid container spacing={2}>
              {this.props.reduxState.setAuctionItemsReducer.map(
                item => {
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {item.name}, Current Bid: $
                              {item.currentBid}
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
                          >
                            Edit
                          </button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AuctionItemsList);