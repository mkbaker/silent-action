import React, {Component} from 'react';
import { connect } from 'react-redux';

//components
import LogOutButton from '../LogOutButton/LogOutButton';

//material-ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

//defines height for grid components
const gridBox = {
    height: "450px"
}

class AdminHome extends Component {
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
              <div>
                <ul>
                  <li>
                    <Link>Spongebob Squarepants</Link>
                  </li>
                  <li>
                    <Link>Patrick Star</Link>
                  </li>
                  <li>
                    <Link>Eugene Krabs</Link>
                  </li>
                </ul>
              </div>
            </Paper>
          </Grid>

          {/* middle box: create a new auction */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <center>
                <h3>Create a New Auction</h3>
                <div>
                  <TextField
                    id="auctionNameInput"
                    label="Auction Name"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="startDate"
                    label="Start Date"
                    type="date"
                    defaultValue="2020-01-01"
                  />
                </div>
                <div>
                  <TextField
                    id="endDate"
                    label="End Date"
                    type="date"
                    defaultValue="2020-01-01"
                  />
                </div>
                <div>
                  <Button variant="contained">Create Auction</Button>
                </div>
              </center>
            </Paper>
          </Grid>

          {/* third box: add new contact  */}
          <Grid item sm={4}>
            <Paper style={gridBox}>
              <center>
                <h3>Add a New Contact</h3>
                <div>
                  <TextField
                    id="firstname-input"
                    label="First Name"
                    type="name"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="lastname-input"
                    label="Last Name"
                    type="name"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="email-input"
                    label="Email"
                    type="email"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="phone-input"
                    value="(1  )    -    "
                    label="Phone Number"
                    type="phone"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <Button variant="contained">Add Contact</Button>
                </div>
                <div>
                  <Link>View All Contacts</Link>
                </div>
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
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminHome);





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

