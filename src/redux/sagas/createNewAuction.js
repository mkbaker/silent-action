import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createNewAuction(action) {
    try {
        //LEFT OFF HERE. THIS URL IS NOT CONNECTING TO THE ROUTER. I'VE HAD THIS ISSUE BEFORE AND NEED TO LOOK IT UP.
        yield axios.post('/api/createAuction', action.payload);
    } catch(error) {
        console.log("Error with creating auction:", error);
    }
}

function* createNewAuctionSaga(){
    yield takeEvery('CREATE_AUCTION_STEP_TWO', createNewAuction);
}
export default createNewAuctionSaga;