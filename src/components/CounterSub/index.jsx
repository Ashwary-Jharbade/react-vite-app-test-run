import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrementAction } from "../Counter/action";

const CounterSub = () => {
  const { counter } = useSelector((state) => {
    const { CounterReducer } = state;
    return CounterReducer;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Counter Substract Component</h4>
        <h4>Counter value {counter}</h4>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            dispatch(decrementAction());
          }}
        >
          Decrement Counter
        </button>
      </div>
      <br />
      <div>
        <Link to="/">Go to Counter component</Link>
        <br />
        <Link to="/details">Go to Details component</Link>
      </div>
    </>
  );
};

export default CounterSub;
