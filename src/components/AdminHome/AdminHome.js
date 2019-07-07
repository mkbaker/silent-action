import React, {Component} from 'react';
import { connect } from 'react-redux';

//components
import AddNewContact from '../AddNewContact/AddNewContact';
import NameAndDate from '../CreateNewAuction/NameAndDate';
import ViewAuctions from '../ViewAuctions/ViewAuctions';



//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//defines height for grid components
const gridBox = {
    height: "450px"
}

class AdminHome extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: "GET_ADMIN_AUCTIONS",
      payload: this.props.reduxState.user.id
    });
    // console.log(this.props.reduxState.user.id);
  }

  render() {
    return (
      <div className="adminHomeContainerDiv">
        <h1>Welcome back, {this.props.user.firstname}. </h1>
        <Grid container spacing={2}>

          {/* left box: view past auctions */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <center>
                <h3>View Auctions</h3>
              </center>
              <ViewAuctions />
            </Paper>
          </Grid>

          {/* middle box: create a new auction */}
          {/* conditionally renders auction detail or create new if setSelectedAuctionReducer is empty */}
          {this.props.reduxState.setSelectedAuctionReducer.id ? (
            <Grid item sm={4}>
              <Paper style={gridBox}>
                <center>
                  <h3>{this.props.reduxState.setSelectedAuctionReducer.auction_name}</h3>
                 
                </center>
              </Paper>
            </Grid>
          ) : (
            <Grid item sm={4}>
              <Paper style={gridBox}>
                <center>
                  <NameAndDate />
                </center>
              </Paper>
            </Grid>
          )}

          {/* third box: add new contact  */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <center>
                <AddNewContact />
              </center>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapReduxStateToProps = reduxState => ({
  user: reduxState.user,
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(AdminHome);





// GIVEN CODE BELOW

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome back, { props.user.firstname }.
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//   </div>
// );

