import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrementAction } from "../Counter/action";
import { multiplyAction } from "./action";

const CounterMultiplier = () => {
  const { counter } = useSelector((state) => {
    const { CounterReducer } = state;
    return CounterReducer;
  });
  const { value } = useSelector((state) => {
    const { MultiplyReducer } = state;
    return MultiplyReducer;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Counter Substract Component</h4>
        <h4>Counter value {counter}</h4>
      </div>
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
        <h4>Multiply value {value}</h4>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(multiplyAction(counter));
          }}
        >
          Multiply {value} with counter: {counter} value
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

export default CounterMultiplier;
