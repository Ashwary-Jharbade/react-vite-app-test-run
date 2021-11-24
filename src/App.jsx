import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";

const cacher = () => {
  let debounceTimer;
  return (args) => {
    clearTimeout(debounceTimer);
    const promiseData = new Promise((resolve, reject) => {
      debounceTimer = setTimeout(async () => {
        const url = `https://jsonplaceholder.typicode.com/photos/${args}`;
        const data = await axios.get(url);
        resolve(data.data);
      }, 3000);
    });
    return promiseData;
  };
};
const debounce = cacher();

function App() {
  const [search, setSearch] = useState("1");
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const func = async () => {
      const data = await debounce(search);
      setPhoto({
        ...photo,
        ...data,
      });
    };

    func();
  }, [search]);

  const _searchValueHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    const { value } = e.target;
    setSearch(value);
  };

  const { albumId, id, title, url, thumbnailUrl } = photo;
  return (
    <>
      <Input
        placeholder="Search"
        type="text"
        name="search"
        value={search}
        handler={_searchValueHandler}
      ></Input>
      <div>
        <br />
        <div>
          <div>Album Id: {albumId}</div>
          <div> Id: {id}</div>
          <div>Title: {title}</div>
          <div>Url: {url}</div>
          <div>Thumbnail Url:{thumbnailUrl}</div>
        </div>
      </div>
    </>
  );
}

export default App;
