import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top_nav from "./Top_nav";
import About_me from "./About_me";
import Home from "./Home";
import Project from "./Project";

function App() {
  return (
    <div className="bg-warning" style={{ "min-height": "100vh" }}>
      <Top_nav />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about_me" element={<About_me />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
