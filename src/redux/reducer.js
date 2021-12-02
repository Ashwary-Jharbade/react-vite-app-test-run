import { combineReducers } from "redux";
import CounterReducer from "../components/Counter/reducer";
import MultiplyReducer from "../components/CounterMultiplier/reducer";

const reducer = combineReducers({
  CounterReducer,
  MultiplyReducer,
});

export default reducer;
