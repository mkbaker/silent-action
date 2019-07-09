import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import createNewAuctionSaga from './createNewAuction';
import getAdminAuctionsSaga from './getAdminAuctionsSaga';
import addNewItem from './addNewItem';
import getAuctionItemsSaga from './getAuctionItemsSaga';
import deleteItemSaga from './deleteItemSaga';
import selectItemSaga from './selectItemSaga';
import updateItemSaga from './updateItemSaga';
import addNewContactSaga from './addNewContactSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    createNewAuctionSaga(),
    getAdminAuctionsSaga(),
    addNewItem(),
    getAuctionItemsSaga(), //gets the items associated with an auction and stores them in the auction items reducer 
    deleteItemSaga(), //deletes an item
    selectItemSaga(), //gets selected item details
    updateItemSaga(), //updates item information
    addNewContactSaga(), //adds a new contact 
  ]);
}
