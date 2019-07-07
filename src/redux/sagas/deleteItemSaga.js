import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* deleteItem(action) {
  try {
    //   console.log(action.payload);
    yield axios.delete("/api/delete/" + action.payload[0]);
    // yield put({ type: "CLEAR_ITEMS" }); //THIS HAS NOT BEEN CREATED YET
    yield put({ type: "GET_AUCTION_ITEMS", payload: action.payload[1]});
  } catch (error) {
    console.log("error deleting item", error);
  }
}

function* deleteItemSaga() {
  yield takeEvery("DELETE_ITEM", deleteItem);
}

export default deleteItemSaga;
