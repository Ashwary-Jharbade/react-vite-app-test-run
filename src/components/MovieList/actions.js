export const MOVIE_LIST_LOADING = "MOVIE_LIST_LOADING";
export const MOVIE_SUCCEED_LOADING = "MOVIE_SUCCEED_LOADING";
export const MOVIE_FAILED_LOADING = "MOVIE_FAILED_LOADING";

export const movieListLoadingAction = (payload) => {
  return {
    type: MOVIE_LIST_LOADING,
    payload,
  };
};

export const movieListSuccessAction = (payload) => {
  return {
    type: MOVIE_SUCCEED_LOADING,
    payload,
  };
};

export const movieListFailedAction = (payload) => {
  return {
    type: MOVIE_FAILED_LOADING,
    payload,
  };
};
