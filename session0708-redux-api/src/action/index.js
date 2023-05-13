import * as types from "../constant/actionType";

export const act_up = (value) => {
  return {
    type: types.ACT_UP,
    payload: value,
  };
};

export const act_down = (value) => {
  return {
    type: types.ACT_DOWN,
    payload: value,
  };
};
