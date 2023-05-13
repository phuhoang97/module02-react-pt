import * as types from "../constant/actionType";

const initState = 0;

const count = (state = initState, action) => {
  // Nhận action và state để xử lý và cập nhật lại state
  switch (action.type) {
    case types.ACT_UP:
      state += action.payload;
      return state;
    case types.ACT_DOWN:
      state -= action.payload;
      return state;
    default:
      break;
  }
  return state;
};

export default count;
