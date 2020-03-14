import { put, takeEvery, call, all } from "redux-saga/effects";
import { FETCH_GET_DATA } from "../constants/actions";
import {
  fetchDataError,
  fetchDataSucces
} from "../models/actions/randomItem/actions";
import ApiService from "../services/apiService";

const apiService = new ApiService();

function* fetchData() {
  try {
    const response = yield call(() => apiService.getAllPLanets());
    yield put(fetchDataSucces(response));
  } catch {
    yield put(fetchDataError());
  }
}

function* responseFetch() {
    yield takeEvery(FETCH_GET_DATA, fetchData)
}

export function* rootSaga() {
  yield all([responseFetch()]);
}
