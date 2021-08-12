import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";

function App() {
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

  const handleOnclickWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true);
          window.localStorage.setItem("auth", "true");
        }
      });
  };

  return (
    <div className="App">
      {auth ? (
        <UserProfile token={token} />
      ) : (
        <button onClick={handleOnclickWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
