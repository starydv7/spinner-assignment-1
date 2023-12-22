import "./App.css";
import Navbar from "./components/Navbar";
import SpinnerWheel from "./components/SpinnerWheel";
import { Routes, Route } from "react-router-dom";
import Social from "./components/Social";
import Login from "./components/Login";
import Community from "./components/Community";
import Story from "./components/Story";
import Features from "./components/Features";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SpinnerWheel /> */}
      <Routes>
         <Route path="" element={<SpinnerWheel />} />
        <Route path="/social" element={<Social />} />
        <Route path="/feat" element={<Features />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/comm" element={<Community />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
