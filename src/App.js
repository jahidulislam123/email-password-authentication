import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import app from './firebase.init';



const auth=getAuth(app);
function App() {
  return (
    <div className="App">
      <form>
        <input type="text" />
        <input type="password" name="" id="" />
      </form>

    </div>
  );
}

export default App;
