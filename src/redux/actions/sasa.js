import { LOADING_UI } from "../types";
import { sessionService } from "redux-react-session";
import axios from "axios";

export const loginUser = (values, navigate, setFieldError, setSubmitting) => {
  axios
    .post("http://188.166.174.210/api/v1/sign-in", values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { data } = response;
      if (data.code === 401) {
        const { message } = data;

        //  ckeck for specific errors
        if (message.includes("userData")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.code === 200) {
        const uData = data.data[0];
        const userToken = uData.token;
        sessionService
          .saveSession(userToken)
          .then(() => {
            sessionService
              .saveUser(uData)
              .then(() => {
                navigate.push("/dashboard");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      } else {
        console.log("Error");
      }

      // complete submission
      setSubmitting(false);
    })
    .catch((err) => {
      //
      console.error(err);
    });
};

export const signupUser = () => {
  console.log(20);
  // complete submission
  //isSubmitting(false);
  // dispatch({ type: LOADING_UI });
  // axios
  //   .post("/signup", newUserData)
  //   .then((res) => {
  //     setAuthorizationHeader(res.data.token);
  //     dispatch(getUserData());
  //     dispatch({ type: CLEAR_ERRORS });
  //     history.push("/");
  //   })
  //   .catch((err) => {
  //     dispatch({
  //       type: SET_ERRORS,
  //       payload: err.response.data,
  //     });
  //   });
};

// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("FBIdToken");
//   delete axios.defaults.headers.common["Authorization"];
//   dispatch({ type: SET_UNAUTHENTICATED });
// };

// export const getUserData = () => (dispatch) => {
//   dispatch({ type: LOADING_USER });
//   axios
//     .get("/user")
//     .then((res) => {
//       dispatch({
//         type: SET_USER,
//         payload: res.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// export const uploadImage = (formData) => (dispatch) => {
//   dispatch({ type: LOADING_USER });
//   axios
//     .post("/user/image", formData)
//     .then(() => {
//       dispatch(getUserData());
//     })
//     .catch((err) => console.log(err));
// };

// export const editUserDetails = (userDetails) => (dispatch) => {
//   dispatch({ type: LOADING_USER });
//   axios
//     .post("/user", userDetails)
//     .then(() => {
//       dispatch(getUserData());
//     })
//     .catch((err) => console.log(err));
// };

// export const markNotificationsRead = (notificationIds) => (dispatch) => {
//   axios
//     .post("/notifications", notificationIds)
//     .then((res) => {
//       dispatch({
//         type: MARK_NOTIFICATIONS_READ,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// const setAuthorizationHeader = (token) => {
//   const FBIdToken = `Bearer ${token}`;
//   localStorage.setItem("FBIdToken", FBIdToken);
//   axios.defaults.headers.common["Authorization"] = FBIdToken;
// };
