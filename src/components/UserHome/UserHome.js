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
              Welcome back, {this.props.reduxState.user.firstname}!
            </h2>
            <ViewAuctions />


    
          </div>
        );
    }
}















const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(UserHome);