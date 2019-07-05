import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getAuctionItems(action) {
  try {
    const response = yield axios.get(`/api/get-auction-items/${action.payload}`);
    yield put({type: 'SET_AUCTION_ITEMS', payload: response.data})
    // console.log('getAuctionItems saga hit with:', action.payload)
  } catch (error) {
    console.log("Error with getting auction items:", error);
  }
}

function* getAuctionItemsSaga() {
  yield takeEvery("GET_AUCTION_ITEMS", getAuctionItems);
}
export default getAuctionItemsSaga;