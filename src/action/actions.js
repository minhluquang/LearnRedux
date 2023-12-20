import {
  INCREMENT,
  DECREMENT,
  FETCH_USERS_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USERS_ERROR,
  DELETE_USERS_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USERS_ERROR,
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

// FETCHING USERS DATA
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

// CREATE NEW USER
export const createNewUserRedux = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });

      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log(error);
      dispatch(createUsersError());
    }
  };
};

export const createUsersRequest = () => {
  return {
    type: DELETE_USERS_REQUEST,
  };
};

export const createUsersSuccess = () => {
  return { type: DELETE_USER_SUCCESS };
};

export const createUsersError = () => {
  return {
    type: DELETE_USERS_ERROR,
  };
};

// Delete users
export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUsersRequest());
    try {
      const res = await axios.post(`http://localhost:8080/users/delete/${id}`, {
        id,
      });

      if (res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log(error);
      dispatch(deleteUsersError());
    }
  };
};

export const deleteUsersRequest = () => {
  return {
    type: DELETE_USERS_REQUEST,
  };
};

export const deleteUsersSuccess = () => {
  return { type: DELETE_USER_SUCCESS };
};

export const deleteUsersError = () => {
  return {
    type: DELETE_USERS_ERROR,
  };
};
