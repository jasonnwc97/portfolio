import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./TopNav";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <div className="bg-warning" style={{ "min-height": "100vh" }}>
      <BrowserRouter>
        <TopNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
