import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';

class EditItem extends Component {
    handleBack = () => {
        this.props.history.push('/add-new-item');
    }
    
  render() {
    return (
      <div>
        <BeneficiaryHeader />

        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(EditItem));
