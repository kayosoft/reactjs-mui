import "./App.css";
import { GoogleAuthMethod } from "./config/AuthMethod";
import SocialmediaAuth from "./services/FirebaseAuth";

function App() {
  const handleOnclickWithGoogle = async (provider) => {
    const userCred = await SocialmediaAuth(provider);
    console.log(userCred);
  };

  return (
    <div className="App">
      <button onClick={() => handleOnclickWithGoogle(GoogleAuthMethod)}>
        Signin with Google
      </button>
    </div>
  );
}

export default App;
