import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createNewAuction(action) {
    // try {
    //     console.log(action.payload);
    // } catch(error) {
    //     console.log("Error with creating auction:", error);
    // }
    //LEFT OFF HERE. THE NEXT STEP IS GOING TO BE TO 
    //MOVE THIS PAYLOAD INFO INTO A REDUCER STATE.
    //AFTER THAT, THE BIO AND PHOTO INFO WILL ALSO GO TO THAT SAME REDUCER.
    //THEN, THE AXIOS PUT REQUEST IS MADE, 
    //WHICH CREATES THE AUCTION. 
}

function* createNewAuctionSaga(){
    // yield takeEvery('CREATE_AUCTION_STEP_ONE', createNewAuction);
}
export default createNewAuctionSaga;