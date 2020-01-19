import { put, call, takeEvery, delay } from "redux-saga/effects";
import { LOAD_API_DATA, loadAPIDataSuccess, loadAPIDataFail } from "./actions";
import { getCharacter } from "../async";

function* loadAPIData() {
  const response = yield call(getCharacter);
  const isResponseSuccess = true;

  // yield delay(1000);
  if (isResponseSuccess) yield put(loadAPIDataSuccess(response));
  else yield put(loadAPIDataFail(response));
}

export function* rootSaga() {
  yield takeEvery(LOAD_API_DATA, loadAPIData);
}
