import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* deleteItem(action) {
  try {
    //   console.log(action.payload);
    yield axios.delete("/api/delete/" + action.payload);
    // yield put({ type: "CLEAR_ITEMS" }); //THIS HAS NOT BEEN CREATED YET
    // yield put({ type: "GET_AUCTION_ITEMS" });
  } catch (error) {
    console.log("error deleting item", error);
  }
}

function* deleteItemSaga() {
  yield takeEvery("DELETE_ITEM", deleteItem);
}

export default deleteItemSaga;
