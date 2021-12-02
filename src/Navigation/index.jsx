import { BrowserRouter, Route, Routes } from "react-router-dom";
import WrappedCounter from "../components/Counter";
import Details from "../components/Details";
import CounterMultiplier from "../components/CounterMultiplier";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappedCounter />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/countersub" element={<CounterMultiplier />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
