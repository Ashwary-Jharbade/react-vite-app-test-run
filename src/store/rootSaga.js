import { all } from "redux-saga/effects";
import movieListWatcher from "../components/MovieList/saga";

export default function* rootSaga() {
  yield all([movieListWatcher()]);
}
