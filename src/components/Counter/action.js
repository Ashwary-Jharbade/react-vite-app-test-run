export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
