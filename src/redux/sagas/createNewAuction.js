import { takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createNewAuction(action) {
    try {
        yield axios.post('/api/createAuction', action.payload);
    } catch(error) {
        console.log("Error with creating auction:", error);
    }
}

function* createNewAuctionSaga(){
    yield takeEvery('CREATE_AUCTION_STEP_TWO', createNewAuction);
}
export default createNewAuctionSaga;