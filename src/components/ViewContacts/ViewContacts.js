import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";


class ViewContacts extends Component {
  //moved this code to AdminHome.js
  //   componentDidMount() {
  //     this.props.dispatch({ type: "GET_ADMIN_AUCTIONS", payload: this.props.reduxState.user.id });
  //     console.log(this.props.reduxState.user.id);
  //   }

  //sets selected auction in a reducer to access at /add-new-item
  handleLink = auction => event => {
    console.log(auction);
    this.props.dispatch({
      type: "SET_SELECTED_AUCTION",
      payload: auction
    });
  };

  render() {
    return (
      <div>
        <ul>
          {/* {this.props.reduxState.adminAuctionsReducer.map(auction => (
            <li key={auction.id}>
              <Link
                component={RouterLink}
                to="/add-new-item"
                value={auction.id}
                onClick={this.handleLink(auction)}
              >
                {auction.auction_name}
              </Link> 
            </li> */}
          {/* ))} */}
          hi 
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewContacts);