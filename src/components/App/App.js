import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

//navbar and footer
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

//ProtectedRoute
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//admin routes
import AboutPage from "../AboutPage/AboutPage";
import AdminHome from "../AdminHome/AdminHome";
import InfoPage from "../InfoPage/InfoPage";
import BioPhotoUpload from "../CreateNewAuction/BioPhotoUpload";
import AddNewItem from "../AddNewItem/AddNewItem";
import AuctionItemsList from "../AuctionItemsList/AuctionItemsList";
import EditItem from "../EditItem/EditItem";
import ViewContacts from "../ViewContacts/ViewContacts";

//user routes
import UserHome from "../UserHome/UserHome";


import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            {/* comment out this redirect if you want to have a welcome page instead of login */}
            {/* add route to welcome page (create that first) */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the AdminHome if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}

            {/* Conditionally render which pages are available based on whether user is an admin */}
            {this.props.reduxState.user.is_admin
              ? 
              <>
              {/* routes available to admin */}
            <ProtectedRoute exact path="/home" component={AdminHome} />
            <ProtectedRoute
              exact
              path="/create-auction/step2"
              component={BioPhotoUpload}
            />
            <ProtectedRoute exact path="/add-new-item" component={AddNewItem} />
            <ProtectedRoute exact path="/review" component={AuctionItemsList} />
            <ProtectedRoute path="/edit-item/:id" component={EditItem} />

            <ProtectedRoute path="/view-contacts" component={ViewContacts} />

            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
            </>
            :
            <>
            {/* routes available to user */}
            <ProtectedRoute exact path="/home" component={UserHome}/>
            </>}
          </Switch>

          <Footer />

          {/* this allows me to view redux state. delete later */}
          <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
