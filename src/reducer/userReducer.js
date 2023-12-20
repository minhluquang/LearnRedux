import {
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USERS_ERROR,
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      console.log("FETCH_USERS_REQUEST : ", action);

      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS : ", action);

      return {
        ...state,
        listUsers: action.dataUsers,
        isLoading: false,
        isError: false,
      };

    case FETCH_USERS_ERROR:
      console.log("FETCH_USERS_ERROR : ", action);

      return { ...state, isLoading: false, isError: true };

    case CREATE_USERS_REQUEST:
      return { ...state, isCreating: true };

    case CREATE_USER_SUCCESS:
      return { ...state, isCreating: false };

    case CREATE_USERS_ERROR:
      return { ...state, isCreating: false };

    default:
      return state;
  }
};

export default userReducer;
