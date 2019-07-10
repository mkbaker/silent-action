import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* updateItem(action) {
  try {
    //console.log(action.payload)
    yield axios.put("/api/update-item", action.payload);
    //console.log('redux saga hit with:', action.payload)
    yield put({ type: "CLEAR_ITEMS" });
    yield put({ type: "GET_AUCTION_ITEMS", payload: action.payload.auctionId });
  } catch (error) {
    console.log("Error updating item:", error);
  }
}

function* updateBid(action) {
  try {
    console.log(action.payload)
    yield axios.put("/api/update-item/bid", action.payload);
    yield put({ type: "CLEAR_ITEMS" });
    yield put({ type: "GET_AUCTION_ITEMS", payload: action.payload.auctionId });
  } catch (error) {
    console.log("Error updating the bid:", error);
  }
}

function* updateItemSaga() {
  yield takeEvery("UPDATE_ITEM", updateItem);
  yield takeEvery("ADD_BID", updateBid);
}
export default updateItemSaga;
