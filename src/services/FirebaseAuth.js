import { GoogleAuthMethod } from "../config/AuthMethod";
import { useEffect, useState } from "react";
import UserProfile from "../components/userProfile/UserProfile";
import firebase from "../config/FirebaseConfig";
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
    <div className="App">
      {auth ? <UserProfile token={token} /> : <UserProfile />}
    </div>
  );
};
export default SocialmediaAuth;
