import React, { Component } from "react";
import { connect } from "react-redux";
import '../App/App.css';

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
import Avatar from "@material-ui/core/Avatar";

class AuctionItemsList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_AUCTION_ITEMS',
            payload: this.props.reduxState.setSelectedAuctionReducer.id})
    }

    render() {
        return (
          <div>
            <div>
              <Paper className="beneficiaryHeaderDiv">
                <img
                className="profileImage"
                  src={
                    this.props.reduxState.setSelectedAuctionReducer
                      .photo_url
                  }
                  alt="Beneficiary"
                  height="150px"
                  width="auto"
                />

                <span>
                  {this.props.reduxState.setSelectedAuctionReducer.bio}
                </span>
              </Paper>
            </div>

            <Grid container xs={12} spacing={2}>
              {this.props.reduxState.setAuctionItemsReducer.map(
                item => {
                  return (
                    <Grid item xs={4}>
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
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
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