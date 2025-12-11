import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import MilzenKC from "./pages/MizlenKC";
import Countertops from "./pages/Countertops";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/milzenkc" />} />
        <Route path="/milzenkc" element={<MilzenKC />} />
        <Route path="/countertops" element={<Countertops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
