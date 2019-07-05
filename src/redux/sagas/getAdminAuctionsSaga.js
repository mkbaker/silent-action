import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getAdminAuctions(action) {
  try {
      //the action.payload is getting here correctly
    // console.log('the action in getAdminAuctions saga is:', action.payload);
    const getResponse = yield axios.get('/api/getauctions', action.payload);
    //take the getResponse.data and put it in a reducer to access and map on ViewAuctions
    yield put({ type: 'SET_ADMIN_AUCTIONS', payload: getResponse.data});
  } catch (error) {
    console.log("Error with getting auctions:", error);
  }
}

function* getAdminAuctionsSaga() {
  yield takeEvery("GET_ADMIN_AUCTIONS", getAdminAuctions);
}
export default getAdminAuctionsSaga;