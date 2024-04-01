import PropTypes from "prop-types";
import "./ItemCard.css";
import trophy from "../assets/icons/trophy.svg";
import trash from "../assets/icons/trashcan.svg";
import { Link } from "react-router-dom";
import copy from "../assets/icons/copy.svg";
export default function ItemCard({
  gameTitle,
  publisher,
  gameType,
  completed,
  platform,
  image,
  id,
  deleteFn,
  duplicateFn,
}) {
  return (
    <div className="gameCard">
      {completed && (
        <div className="completed">
          <img src={trophy} title=" I have beaten this game" alt="trophy" />{" "}
        </div>
      )}
      <div className="cardImg">
        <img src={image} alt={gameTitle} />
      </div>
      <div className="cardTitle">
        <Link to={`${id}`}>{gameTitle}</Link>
        </div>
      <div className="action">
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            deleteFn(id);
          }}
        >
          <img src={trash} alt="delete" />
        </a>
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            duplicateFn(id);
          }}
        >
          <img src={copy} />
        </a>
      </div>
    </div>
  );
}
ItemCard.propTypes = {
  gameTitle: PropTypes.string,
  publisher: PropTypes.arrayOf(PropTypes.string),
  gameType: PropTypes.string,
  completed: PropTypes.bool,
  platform: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  duplicateFn: PropTypes.func,
  deleteFn: PropTypes.func,
};
