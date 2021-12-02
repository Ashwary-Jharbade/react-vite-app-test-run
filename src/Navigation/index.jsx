import { BrowserRouter, Route, Routes } from "react-router-dom";
import WrappedCounter from "../components/Counter";
import Details from "../components/Details";
import CounterSub from "../components/CounterSub";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrappedCounter />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/countersub" element={<CounterSub />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
