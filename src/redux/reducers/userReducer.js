import {
  SET_USER,
  LOGOUT_USER,
  TOGGLE_USER_FETCHING_STATE,
} from "../actionTypes";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userfetchingState: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    case TOGGLE_USER_FETCHING_STATE:
      return { ...state, userfetchingState: !state.userfetchingState };
    default:
      return state;
  }
};

export default userReducer;
