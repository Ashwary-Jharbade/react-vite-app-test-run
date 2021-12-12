import { useState } from "react";
import { Button, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { movieListLoadingAction } from "./actions";
import "./index.css";

const MovieList = () => {
  const [searchText, setSearchText] = useState(2017);
  const dispatch = useDispatch();
  const { movieListReducer } = useSelector((state) => {
    return state;
  });
  const { isLoading, movieList } = movieListReducer;
  const loaderStyle = {
    textAlign: "center",
    margin: "10px",
    width: "100%",
  };
  const imgPrefix = "http://image.tmdb.org/t/p/w185/";
  const _onChangeInputHandler = (e) => {
    if (!e?.target) {
      return;
    }
    const { value } = e.target;
    setSearchText(Number(value));
  };
  return (
    <>
      <div>
        <div className="brandAlignment">
          <h2 className="brand">IMDB</h2>
        </div>
      </div>
      <div className="padding-10px">
        <div className="flex">
          <Input
            className="margin-5px"
            placeholder="Enter a year"
            type="number"
            value={searchText}
            onChange={_onChangeInputHandler}
          />
          <Button
            onClick={() => {
              dispatch(movieListLoadingAction(searchText));
            }}
            className="margin-10px"
            color="primary"
          >
            Search
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <div style={loaderStyle}>Loading...</div>
        ) : (
          movieList.map((item, index) => {
            console.log(item);
            return (
              <>
                <div key={index} className="card-container">
                  <div className="image-container">
                    <img src={`${imgPrefix}${item.poster_path}`} alt="" />
                  </div>
                  <div className="card-text">
                    <div>{item.title}</div>
                    <div>Language: {item.original_language}</div>
                    <div className="overview">Overview: {item.overview}</div>
                    <div>Ratings: {item.vote_average}</div>
                    <div>Release Date: {item.release_date}</div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default MovieList;
