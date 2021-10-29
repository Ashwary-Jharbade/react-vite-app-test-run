import { useState } from "react";
import Button from "../components/Button";
import Screen from "../components/Screen";
const CalculatorView = () => {
  const [result, setResult] = useState("0");
  const styling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const updateUpperValue = (e) => {
    const num = result + "";
    if (num.length === 1 && num === "0") {
      setResult(e.target.innerHTML);
    } else {
      setResult(result + e.target.innerHTML);
    }
  };

  const reCalc = (e) => {
    setResult("0");
  };

  const clearValue = (e) => {
    let newResult;
    const num = result + "";
    newResult = num.slice(0, -1);
    if (newResult.length === 0) {
      newResult = 0;
    }
    setResult(newResult);
  };

  const evaluate = (e) => {
    const newResult = eval(result);
    setResult(newResult);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "rgb(45 45 45)",
          borderRadius: "10px",
        }}
      >
        <Screen expression={result}></Screen>
        <div style={styling}>
          <Button char="%" updateValue={updateUpperValue}></Button>
          <Button char="/" updateValue={updateUpperValue}></Button>
          <Button char="AC" updateValue={reCalc}></Button>
          <Button char="C" updateValue={clearValue}></Button>
        </div>
        <div style={styling}>
          <Button char="7" updateValue={updateUpperValue}></Button>
          <Button char="8" updateValue={updateUpperValue}></Button>
          <Button char="9" updateValue={updateUpperValue}></Button>
          <Button char="*" updateValue={updateUpperValue}></Button>
        </div>
        <div style={styling}>
          <Button char="4" updateValue={updateUpperValue}></Button>
          <Button char="5" updateValue={updateUpperValue}></Button>
          <Button char="6" updateValue={updateUpperValue}></Button>
          <Button char="-" updateValue={updateUpperValue}></Button>
        </div>
        <div style={styling}>
          <Button char="1" updateValue={updateUpperValue}></Button>
          <Button char="2" updateValue={updateUpperValue}></Button>
          <Button char="3" updateValue={updateUpperValue}></Button>
          <Button char="+" updateValue={updateUpperValue}></Button>
        </div>
        <div style={styling}>
          <Button char="." updateValue={updateUpperValue}></Button>
          <Button char="0" updateValue={updateUpperValue}></Button>
          <Button char="=" updateValue={evaluate}></Button>
        </div>
      </div>
    </>
  );
};

export default CalculatorView;
