import { put, call, takeEvery, delay } from "redux-saga/effects";
import { LOAD_API_DATA, loadAPIDataSuccess, loadAPIDataFail } from "./actions";
import { getCharacter } from "../async";

function* loadAPIData(action) {
  const response = yield call(getCharacter, action.payload);
  const isResponseSuccess = true;

  if (isResponseSuccess) yield put(loadAPIDataSuccess(response));
  else yield put(loadAPIDataFail(response));
}

export function* rootSaga() {
  yield takeEvery(LOAD_API_DATA, loadAPIData);
}
