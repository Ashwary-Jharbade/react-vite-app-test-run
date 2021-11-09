import { useContext, useEffect } from "react";
import { context } from "./ParentCounter";

const Counter = () => {
  const counter = useContext(context);
  useEffect(() => {
    console.log("Log");
  }, [counter]);
  return (
    <>
      <button>Child Button {counter} </button>
    </>
  );
};

export default Counter;
