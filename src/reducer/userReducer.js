import {
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USERS_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      console.log("FETCH_USERS_REQUEST : ", action);

      return {
        ...state,
      };

    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS : ", action);

      return {
        ...state,
        listUsers: action.dataUsers,
      };

    case FETCH_USERS_ERROR:
      console.log("FETCH_USERS_ERROR : ", action);

      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
