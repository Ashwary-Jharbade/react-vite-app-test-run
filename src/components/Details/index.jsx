import DetailsComp from "./component";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../Counter/action";

const mapStateToProps = (state) => {
  const { CounterReducer } = state;
  return {
    counter: CounterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(incrementAction());
    },
    // decrement: () => {
    //   dispatch(decrementAction());
    // },
  };
};

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsComp);
export default Details;
