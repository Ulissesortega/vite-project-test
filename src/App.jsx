import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MilzenKC from "./pages/MilzenKC";
import Countertops from "./pages/Countertops";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />      
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/milzenkc" element={<MilzenKC />} />
        <Route path="/countertops" element={<Countertops />} />

        {/* 404 fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
