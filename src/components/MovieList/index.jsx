import { useState } from "react";
import { Button, Input } from "reactstrap";
import getData from "../../providers/network/getData";
import "./index.css";
const MovieList = () => {
  const [searchText, setSearchText] = useState(2017);
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState(0);
  const _onChangeInputHandler = (e) => {
    if (!e?.target) {
      return;
    }
    const { value } = e.target;
    setSearchText(Number(value));
  };
  const _onMovieSearchHandler = async (e) => {
    if (!e?.target) {
      return;
    }
    const data = await getData(
      `https://api.themoviedb.org/3/discover/movie?api_key={MANUALLY_WRITE_API_KEY_HERE}&primary_release_year=2017&sort_by=revenue.desc`
    );
    const { results, total_pages } = data;
    setMovieList(results);
    setPages(Number(total_pages));
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
            onClick={_onMovieSearchHandler}
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
