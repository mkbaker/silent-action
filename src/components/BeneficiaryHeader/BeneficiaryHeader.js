import React, { Component } from "react";
import { connect } from "react-redux";
import "../App/App.css";

class BeneficiaryHeader extends Component {
    render() {
        return (
          <div>
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

              <div className="beneficiaryBio">
                {this.props.reduxState.setSelectedAuctionReducer.bio}
              </div>
          </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(BeneficiaryHeader);