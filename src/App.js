import "./App.css";
import "firebase/auth";
import SocialmediaAuth from "./services/FirebaseAuth";
import { GoogleAuthMethod } from "./config/AuthMethod";

function App() {
  const handleOnClick = async (provider) => {
    const userCred = await SocialmediaAuth(provider);
    console.log(userCred);
  };
  return (
    <div className="App">
      <button onClick={() => handleOnClick(GoogleAuthMethod)}>
        Signin with Google
      </button>
    </div>
  );
}

export default App;
