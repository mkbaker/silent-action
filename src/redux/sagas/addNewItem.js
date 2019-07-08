import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* addNewItem(action) {
  try {
    yield axios.post("/api/add-new-item", action.payload);
    // console.log('redux saga hit with:', action.payload)
    yield put({ type: "CLEAR_ITEMS" });
    yield put({type: 'GET_AUCTION_ITEMS', payload: action.payload.auctionId})
  } catch (error) {
    console.log("Error with adding new item:", error);
  }
}

function* addNewItemSaga() {
  yield takeEvery("ADD_NEW_ITEM", addNewItem);
}
export default addNewItemSaga;