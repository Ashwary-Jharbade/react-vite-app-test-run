import {
  MOVIE_FAILED_LOADING,
  MOVIE_SUCCEED_LOADING,
  MOVIE_LIST_LOADING,
} from "./actions";

const initialState = {
  isLoading: false,
  movieList: [],
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST_LOADING:
      return { ...state, isLoading: true };
    case MOVIE_SUCCEED_LOADING:
      return { ...state, isLoading: false, movieList: action.payload };
    case MOVIE_FAILED_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default movieListReducer;
