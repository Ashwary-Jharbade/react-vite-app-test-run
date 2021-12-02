import { Link } from "react-router-dom";

const Counter = (props) => {
  const { counter, increment, decrement } = props;
  return (
    <>
      <h3>Counter App</h3>
      <h4>Counter Value '{counter}'</h4>
      <div>
        <button
          onClick={(e) => {
            increment();
          }}
        >
          Increment by 1
        </button>
        &nbsp;
        <button
          onClick={(e) => {
            decrement();
          }}
        >
          Decrement by 1
        </button>
      </div>
      <br />
      <Link to="/details">Jump to details component</Link>
      <br />
      <Link to="/countersub">Go to CounterMultiplier component</Link>
    </>
  );
};

export default Counter;
