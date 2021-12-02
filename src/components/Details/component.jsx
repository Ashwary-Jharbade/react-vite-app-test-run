import { Link } from "react-router-dom";

export default (props) => {
  const { counter, increment } = props;
  console.log("Deatails Component Rendered");
  return (
    <>
      <h4>Deatails Component</h4>
      <h4>Counter value {counter}</h4>
      <div>
        <button onClick={() => increment()}>Increment</button>
      </div>
      <br />
      <div>
        <Link to="/">Go to counter component</Link>
        <br />
        <Link to="/countersub">Go to CounterMultiplier component</Link>
      </div>
    </>
  );
};
