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
      <div>
        {movieList.map((item, index) => {
          return (
            <>
              <div key={index} className="card-container">
                <div>{item.original_title}</div>
                <div>{item.title}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
