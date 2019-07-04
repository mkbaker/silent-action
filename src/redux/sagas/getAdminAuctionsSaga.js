import { takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getAdminAuctions(action) {
  try {
      //the action.payload is getting here correctly
    console.log('the action in getAdminAuctions saga is:', action.payload);
    const getResponse = yield axios.get('/api/getauctions', action.payload);
    console.log(getResponse.data);
  } catch (error) {
    console.log("Error with getting auctions:", error);
  }
}

function* getAdminAuctionsSaga() {
  yield takeEvery("GET_ADMIN_AUCTIONS", getAdminAuctions);
}
export default getAdminAuctionsSaga;