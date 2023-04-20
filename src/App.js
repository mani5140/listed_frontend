import Signuppage from "./Components/Signuppage.js";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signuppage />}/>
      <Route exact path="/dashboard" element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
