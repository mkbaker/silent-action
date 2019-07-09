import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getContacts(action) {
  try {
    //   console.log('get contacts saga hit with payload:', action.payload)
    const response = yield axios.get(
      `/api/get-contacts/${action.payload}`
    );
    // console.log(response.data)
    yield put({ type: "SET_CONTACTS", payload: response.data });
    // console.log('getContacts saga hit with:', action.payload)
  } catch (error) {
    console.log("Error with getting contacts:", error);
  }
}

function* getContactsSaga() {
  yield takeEvery("GET_CONTACTS", getContacts);
}
export default getContactsSaga;
