import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import {Link as RouterLink } from 'react-router-dom';

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

class ViewAuctions extends Component {

//sets selected auction in a reducer to access at /add-new-item
handleLink = (auction) => (event) => {
  console.log(auction)
  this.props.dispatch({
    type: 'SET_SELECTED_AUCTION',
    payload: auction
  })
}
 
  render() {
    return (
      <div>
        {/* what renders is based on is_admin status */}
        {this.props.reduxState.user.is_admin ? (
          // renders list for admin
          <ul>
            {this.props.reduxState.adminAuctionsReducer.map(auction => (
              <li key={auction.id}>
                <Link
                  component={RouterLink}
                  to="/add-new-item"
                  value={auction.id}
                  onClick={this.handleLink(auction)}
                >
                  {auction.auction_name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          // renders cards for user
          <Grid container spacing={2}>
            {this.props.reduxState.setUserAuctionsReducer.map(auction => (
              <Grid item xs={4} key={auction.id}>
                <Card>
                  <CardActionArea
                    onClick={this.handleLink(auction)}
                    component={RouterLink}
                    to="/view"
                    value={auction.id}
                  >
                    <CardMedia
                      component="img"
                      alt={auction.auction_name}
                      height="150"
                      image={auction.photo_url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {auction.auction_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {auction.bio}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewAuctions);