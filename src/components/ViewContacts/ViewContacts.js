import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

//material-UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


class ViewContacts extends Component {
  //moved this code to AdminHome.js
  //   componentDidMount() {
  //     this.props.dispatch({ type: "GET_ADMIN_AUCTIONS", payload: this.props.reduxState.user.id });
  //     console.log(this.props.reduxState.user.id);
  //   }

  //sets selected auction in a reducer to access at /add-new-item
  // handleLink = auction => event => {
  //   console.log(auction);
  //   this.props.dispatch({
  //     type: "SET_SELECTED_AUCTION",
  //     payload: auction
  //   });
  // };

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Invite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.reduxState.setContactsReducer.map(contact => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {contact.firstname} {contact.lastname}
                </TableCell>
                <TableCell>{contact.username}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>
                  <button>Send Invite</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewContacts);


// originally mapped a simple list
//  <ul>
//    {this.props.reduxState.setContactsReducer.map(contact => (
//      <li key={contact.id}>
//        {contact.firstname + " " + contact.lastname}
//        {/* This button is not functional yet */}
//        <button>Send Invite</button>
//      </li>
//    ))}
//  </ul>;