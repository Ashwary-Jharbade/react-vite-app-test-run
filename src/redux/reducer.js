import { combineReducers } from "redux";
import CounterReducer from "../components/Counter/reducer";

const reducer = combineReducers({
  CounterReducer,
});

export default reducer;
