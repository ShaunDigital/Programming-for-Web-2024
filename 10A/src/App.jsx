import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./views/Home";
import { GameDetail } from "./views/GamesDetail";
import gameData from "./assets/gameData.json";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<GameDetail data={gameData} />}  />
    </Routes>
  );
}

export default App;
