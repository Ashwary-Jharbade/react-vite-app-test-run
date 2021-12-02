export const MULTIPLY = "MULTIPLY";

export const multiplyAction = (payload) => {
  return {
    type: MULTIPLY,
    payload,
  };
};
