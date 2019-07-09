import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* addNewContact(action) {
  try {
    yield axios.post("/api/add-new-contact", action.payload)
    // console.log('addNewContactSaga hit with:', action.payload)
    yield put({ type: "CLEAR_CONTACTS" });
    yield put({ type: "GET_CONTACTS", payload: action.payload.admin_id});
  } catch (error) {
    console.log("Error with adding new contact:", error);
  }
}

function* addNewContactSaga() {
  yield takeEvery("ADD_NEW_CONTACT", addNewContact);
}
export default addNewContactSaga;
