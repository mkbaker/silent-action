import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//components
import BeneficiaryHeader from '../BeneficiaryHeader/BeneficiaryHeader';

class EditItem extends Component {
    state={
        id: this.props.match.params.id 
    }

    componentDidMount() {
        //dispatch an action that gets all the info about this item 
        console.log(this.state.id);
        this.props.dispatch({ type: 'SELECT_ITEM', payload: this.props.match.params.id})
    }

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
