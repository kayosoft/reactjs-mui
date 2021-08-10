import { GoogleAuthMethod } from "../config/AuthMethod";
import firebase from "../config/FirebaseConfig";
const SocialmediaAuth = (provider) => {
  return firebase
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
};
export default SocialmediaAuth;
