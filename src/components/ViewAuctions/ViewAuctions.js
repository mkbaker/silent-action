import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";



class ViewAuctions extends Component {


    //moved this code to AdminHome.js
//   componentDidMount() {
//     this.props.dispatch({ type: "GET_ADMIN_AUCTIONS", payload: this.props.reduxState.user.id });
//     console.log(this.props.reduxState.user.id);
//   }
 
  render() {
    return (
      <div>
        <ul>
          {this.props.reduxState.adminAuctionsReducer.map(auction => (
            <li key={auction.id}>
              <Link>{auction.auction_name}</Link>
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