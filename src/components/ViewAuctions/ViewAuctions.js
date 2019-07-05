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

handleLink = (id) => (event) => {
  console.log(id)
  this.props.dispatch({
    type: 'SET_SELECTED_AUCTION',
    payload: id
  })
}
 
  render() {
    return (
      <div>
        <ul>
          {this.props.reduxState.adminAuctionsReducer.map(auction => (
            <li key={auction.id}>
              <Link
                // component={RouterLink}
                // to='/add-new-item'
                value={auction.id}
                onClick={this.handleLink(auction.id)}
              >
                {auction.auction_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewAuctions);