// routes
import Router from "./routes";


// theme
import ThemeConfig from "./theme";
import GlobalStyles from './theme/globalStyles';
import "./App.css";
import {useSelector} from "react-redux";
// import jwtDecode from "jwt-decode";

// Auth , Redux stuff
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";


// Components
// import AuthRoute from "./utils/AuthRoute";
// import ProtectedRoute from "./utils/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';


import axios from "axios";

axios.defaults.baseURL = "https://188.166.174.210/api/v1";

const token = localStorage.getItem("TFIdToken");
if (token) {
  //const decodedToken = jwtDecode(token);
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
  const authenticated = useSelector((state) => state.user.authenticated);
  console.log(authenticated);

  const routing = Router(authenticated);
  return (

    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <>
        {routing}
        </>
    </ThemeConfig>
    
    
  );
}
