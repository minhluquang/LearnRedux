import {
  INCREMENT,
  DECREMENT,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USERS_ERROR,
} from "./types.js";

import axios from "axios";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersError());
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (payload) => {
  return { type: FETCH_USER_SUCCESS, dataUsers: payload };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USERS_ERROR,
  };
};
