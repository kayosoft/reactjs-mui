import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ,
} from "../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginUser = (userData, history) => (dispatch) => {
  
  dispatch({ type: LOADING_UI });
  axios
    .post("/sign-in", userData)
    .then((response) => {
      try {
        setAuthorizationHeader(response.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        console.log(response.data);
        history.push('/dashboard');
      } catch (err) {
        console.log(response, err);
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/sign-up", newUserData)
    .then((response) => {
      try {
        setAuthorizationHeader(response.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        history.push("/");
      } catch (err) {
        console.log(response, err);
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("TFIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/current-user-information")
    .then((response) => {
      try {
      dispatch({
        type: SET_USER,
        payload: response.data,
      });
    } catch (err) {
      console.log(response, err);
    }
    })
    .catch((err) => console.log(err));
};

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user/image", formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const markNotificationsRead = (notificationIds) => (dispatch) => {
  axios
    .post("/notifications", notificationIds)
    .then((res) => {
      dispatch({
        type: MARK_NOTIFICATIONS_READ,
      });
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const TFIdToken = `Bearer ${token}`;
  localStorage.setItem("TFIdToken", TFIdToken);
  axios.defaults.headers.common["Authorization"] = TFIdToken;
};
