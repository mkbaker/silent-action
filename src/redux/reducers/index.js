import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import newAuctionReducer from './newAuctionReducer';
import adminAuctionsReducer from './adminAuctionsReducer';
import setSelectedAuctionReducer from './setSelectedAuctionReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  newAuctionReducer, //tracks creation of a new auction 
  adminAuctionsReducer, //stores the user's affiliated auctions
  setSelectedAuctionReducer, //stores the selected auction, to use when adding new items to auction
});

export default rootReducer;
