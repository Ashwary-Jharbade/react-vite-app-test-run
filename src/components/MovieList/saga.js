import { put, takeEvery } from "redux-saga/effects";
import {
  movieListFailedAction,
  movieListSuccessAction,
  MOVIE_LIST_LOADING,
} from "./actions";
import getData from "../../providers/network/getData";

function* getMovieList(action) {
  try {
    const { payload } = action;
    const data = yield getData(
      `https://api.themoviedb.org/3/discover/movie?api_key={API_KEY}&primary_release_year=${payload}&sort_by=revenue.desc`
    );
    const { results, total_pages } = data;
    if (!results || !results.length) {
      yield put(movieListFailedAction());
    }
    yield put(movieListSuccessAction(results));
  } catch (error) {
    yield put(movieListFailedAction());
  }
}

export default function* movieListWatcher() {
  yield takeEvery(MOVIE_LIST_LOADING, getMovieList);
}
