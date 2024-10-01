import backURL from "@/config/config";
import axios from "axios";
import { all, fork } from "redux-saga/effects";
//
import userSaga from "./user";

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = false;

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
