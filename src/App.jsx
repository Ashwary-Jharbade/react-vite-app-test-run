import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";

const cacher = () => {
  let debounceTimer;
  return (args) => {
    clearTimeout(debounceTimer);
    const apiLogger = async () => {
      const url = `https://jsonplaceholder.typicode.com/photos/${args}`;
      const data = await axios.get(url);
      console.log(data.data);
    };
    debounceTimer = setTimeout(apiLogger, 3000);
  };
};
const debounce = cacher();

function App() {
  const [search, setSearch] = useState("1");

  useEffect(() => {
    debounce(search);
  }, [search]);

  const _searchValueHandler = (e) => {
    if (!e || !e?.target) {
      return;
    }
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <Input
        placeholder="Search"
        type="text"
        name="search"
        value={search}
        handler={_searchValueHandler}
      ></Input>
    </>
  );
}

export default App;
