import { useContext } from "react";
import { balanceContext } from "./Banking";

const DummyContent = () => {
  const obj = useContext(balanceContext);
  return (
    <>
      <div>{obj.name}</div>
      <div>{obj.city}</div>
    </>
  );
};

export default DummyContent;
