import { useEffect, useState } from "react";
import Input from "./components/Input";

const cacher = () => {
  let debounceTimer;
  return (args) => {
    clearTimeout(debounceTimer);
    const apiLogger = () => {
      const url = `https://jsonplaceholder.typicode.com/comments?postId=${args}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
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
