import React, { Component } from "react";
import { connect } from "react-redux";


class AuctionItemsList extends Component {
    render() {
        return (
            <div>
                hey i'm AuctionItemsList
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AuctionItemsList);