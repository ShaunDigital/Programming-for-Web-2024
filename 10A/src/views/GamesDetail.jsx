import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import "../views/GamesDetail.css";
export function GameDetail({ data }) {
  const { id } = useParams();
  console.log("params", "id");
  const selectedGame = data.find((game) => game.id === id);
  console.log("game", selectedGame);
  return (
    <div className="games-detail-container">
      <Link to="/">Back to Home</Link>
      <h1>{selectedGame.gameTitle}</h1>
      <img src={selectedGame.image} alt={selectedGame.gameTitle} />
      <p>Publisher: {selectedGame.publisher.join(", ")}</p>
      <p>Platform I play on: {selectedGame.platform}</p>
      <p>Game Type: {selectedGame.gameType}</p>
    </div>
  );
}
GameDetail.propTypes = {
  data: PropTypes.array,
};
