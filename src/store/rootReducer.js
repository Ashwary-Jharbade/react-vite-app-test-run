import { combineReducers } from "redux";
import movieListReducer from "../components/MovieList/reducer";

const reducers = combineReducers({
  movieListReducer,
});

export default reducers;
