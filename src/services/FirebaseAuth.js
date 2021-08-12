import { GoogleAuthMethod } from "../config/AuthMethod";
import { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import firebase from "../config/FirebaseConfig";
import App from "../App";
const SocialmediaAuth = (provider) => {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);
  firebase
    .auth()
    .signInWithPopup(GoogleAuthMethod)
    .then((userCred) => {
      if (userCred) {
        return userCred.user;
      }
    })
    .catch((er) => {
      return er;
    });
  return (
    <div className="App">{auth ? <UserProfile token={token} /> : <App />}</div>
  );
};
export default SocialmediaAuth;
