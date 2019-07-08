import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* selectItem(action) {
  try {
    const response = yield axios.get(
    `/api/get-item-detail/${action.payload}`
   );
//    console.log(response.data[0]);
   yield put({ type: "SET_SELECTED_ITEM", payload: response.data[0] });
  } catch (error) {
    console.log("Error with getting item details:", error);
  }
}

function* selectItemSaga() {
  yield takeEvery("SELECT_ITEM", selectItem);
}
export default selectItemSaga;
