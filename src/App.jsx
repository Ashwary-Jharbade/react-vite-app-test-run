import { useEffect, useState } from "react";
import Input from "./components/Input";
import debounce from "./utilities/debounce";

function App() {
  const [search, setSearch] = useState("");

  const _logger = () => {
    console.log(search);
  };

  useEffect(() => {
    debounce(_logger(), 10000);
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
