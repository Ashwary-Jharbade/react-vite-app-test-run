import { useContext } from "react";
import { ThemeContext } from "../App";
const HomeChild = () => {
  const theme = useContext(ThemeContext);
  const { th, updateTh } = theme;
  const update = () => {
    updateTh("red");
  };
  return (
    <>
      <div>Home Child Component Value {th.foreground} </div>
      <button onClick={update}>Click</button>
    </>
  );
};

export default HomeChild;
