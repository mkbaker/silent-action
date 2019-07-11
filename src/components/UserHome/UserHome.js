import React, { Component } from "react";
import { connect } from "react-redux";

//components
import ViewAuctions from "../ViewAuctions/ViewAuctions";

class UserHome extends Component {

      componentDidMount() {
        this.props.dispatch({
        type: "GET_USER_AUCTIONS",
        payload: this.props.reduxState.user.admin_id
        });
    }

    render() {
        return (
          <div className="userHomeContainerDiv">
            <h2>
              Welcome, {this.props.reduxState.user.firstname}!
            </h2>
            <h4>You've been invited to participate in these auctions. Click on one to get started!</h4>
            <ViewAuctions />


    
          </div>
        );
    }
}















const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(UserHome);