// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import "./App.css";
// components
import ScrollToTop from "./components/ScrollToTop";
import jwtDecode from "jwt-decode";

// Auth stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

// Components
import AuthRoute from "./utils/AuthRoute";

import axios from "axios";

axios.defaults.baseURL = "http://188.166.174.210/api/v1/";

const token = localStorage.FBIdToken;
if (token) {
  // const decodedToken = jwtDecode(token);
  if (token.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <Provider store={store}>
        <ScrollToTop />
        <Router />
      </Provider>
    </ThemeConfig>
  );
}
