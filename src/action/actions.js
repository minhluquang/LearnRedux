import { INCREMENT, DECREMENT } from "./types.js";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { message: "MINH TEST" },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
