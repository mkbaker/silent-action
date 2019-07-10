import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

class ItemDetail extends Component {
    state = {
        newBid: '',
        itemId:'',
        userId:'',
        auctionId:''
    }

    handleNewBid = event => {
        this.setState({
            newBid: event.target.value,
            itemId: this.props.reduxState.selectedItemReducer.id,
            userId: this.props.reduxState.user.id,
            auctionId: this.props.reduxState.selectedItemReducer.belongs_to
        })
    }

    handleAddBid = () => {
        // console.log(this.state);
        if(this.state.newBid > this.props.reduxState.selectedItemReducer.currentBid) {
            this.props.dispatch({
                type: 'ADD_BID',
                payload: this.state
            })} else if (this.state.newBid < this.props.reduxState.selectedItemReducer.currentBid) {
                alert('Please enter a bid that is higher than the current bid!')
            } 
        this.props.dispatch({
             type: "SELECT_ITEM",
             payload: this.props.reduxState.selectedItemReducer.id
           });
        this.setState({
            ...this.state,
            newBid: ''
        })
        }
    

    render() {
        return (
          <div className="logInDiv">
            <Paper>
              <center>
                <h2>
                  {this.props.reduxState.selectedItemReducer.name}
                </h2>
                <img
                  src={this.props.reduxState.selectedItemReducer.photo}
                  height="400px"
                />
              </center>

              <p>
                {this.props.reduxState.selectedItemReducer.description}
              </p>

              <center>
                <h2>
                  Current Bid: $
                  {this.props.reduxState.selectedItemReducer.currentBid}
                </h2>
                <div>
                  <TextField
                    id="bidInput"
                    variant="outlined"
                    value={this.state.newBid}
                    onChange={this.handleNewBid}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          $
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                
                  <Button
                    variant="contained"
                    onClick={this.handleAddBid} 
                  >
                    Add Your Bid
                  </Button>
                
              </center>
            </Paper>
          </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ItemDetail);