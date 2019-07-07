import React, { Component } from "react";
import { connect } from "react-redux";
import "../App/App.css";

//material-ui
import Paper from "@material-ui/core/Paper";

class BeneficiaryHeader extends Component {
    render() {
        return (
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
        );
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(BeneficiaryHeader);