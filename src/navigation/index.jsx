import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import CompA from "../components/CompA";
import CompB from "../components/CompB";
import CompC from "../components/CompC";
import CompAR from "../components/CompAR";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="compA" element={<CompA />}></Route>
          <Route path="compA/:id" element={<CompAR />}></Route>
          <Route path="/compB" element={<CompB />}></Route>
          <Route path="/compC" element={<CompC />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
