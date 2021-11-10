import ChildAddComp from "./ChildAddComp";
import { useState } from "react";

const AddTwoNum = () => {
  const [count, setCount] = useState(0);
  const add = (a, b) => {
    setCount(count + 1);
    const sum = parseInt(a) + parseInt(b);
    console.log("Actual function called", sum, count);
  };
  return (
    <>
      <ChildAddComp func={add}></ChildAddComp>
    </>
  );
};

export default AddTwoNum;
