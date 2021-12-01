import Counter from "./component";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "./action";

const mapStateToProps = (state) => {
  const { CounterReducer } = state;
  return {
    counter: CounterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Entered");
  return {
    increment: () => {
      dispatch(incrementAction());
    },
    decrement: () => {
      dispatch(decrementAction());
    },
  };
};

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrappedCounter;
