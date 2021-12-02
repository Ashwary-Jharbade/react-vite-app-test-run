import { BrowserRouter, Route, Routes } from "react-router-dom";
import WrappedCounter from "../components/Counter";
import Details from "../components/Details";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappedCounter />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
