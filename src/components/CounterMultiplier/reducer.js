import { MULTIPLY } from "./action";

const inialState = {
  value: 1,
};

export default (state = inialState, action) => {
  switch (action.type) {
    case MULTIPLY:
      const { payload } = action;
      return { ...state, value: state.value * payload };
    default:
      return state;
  }
};
