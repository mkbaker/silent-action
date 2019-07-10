import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import {Link as RouterLink } from 'react-router-dom';


class ViewAuctions extends Component {
 

    //moved this code to AdminHome.js
//   componentDidMount() {
//     this.props.dispatch({ type: "GET_ADMIN_AUCTIONS", payload: this.props.reduxState.user.id });
//     console.log(this.props.reduxState.user.id);
//   }

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
        {this.props.reduxState.user.is_admin ? 
        // renders for admin
        <ul>
          {this.props.reduxState.adminAuctionsReducer.map(auction => (
            <li key={auction.id}>
              <Link
                component={RouterLink}
                to='/add-new-item'
                value={auction.id}
                onClick={this.handleLink(auction)}
              >
                {auction.auction_name}
              </Link>
            </li>
          ))}
        </ul>
        :
        // renders for user
        <ul>
          {this.props.reduxState.setUserAuctionsReducer.map(auction => (
            <li key={auction.id}>
              <Link
                // component={RouterLink}
                // to='/add-new-item'
                value={auction.id}
                onClick={this.handleLink(auction)}
              >
                {auction.auction_name}
              </Link>
            </li>
          ))}
        </ul>
        }
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewAuctions);