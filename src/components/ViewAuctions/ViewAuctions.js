import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";



class ViewAuctions extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ADMIN_AUCTIONS", payload: this.props.reduxState.user.id });
    console.log(this.props.reduxState.user.id);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link>John Grisham</Link>
          </li>
          <li>
            <Link>JK Rowling</Link>
          </li>
          <li>
            <Link>Dave Eggers</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(ViewAuctions);