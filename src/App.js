import HomePage from "./pages/homePage.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/gamePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
