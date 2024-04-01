import { useState } from "react";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewGamesForm } from "../newgamesform/NewGamesForm";
import { nanoid } from "nanoid";
import gameData from "../assets/gameData.json";

export function Home() {  
    const [games, setGames] = useState(gameData);

    function deleteCard(id) {
      console.log("delete me", id);
      const updatedArray = games.filter((favoriteGames) => {
        return favoriteGames.id !== id;
      });
      setGames(updatedArray);
    }

    function duplicateCard(id) {
      console.log("duplicate me", id);
      const matchingGame = games.find((favoriteGames) => {
        return favoriteGames.id === id;
      });
      const updatedGame = { ...matchingGame, id: nanoid() };
      setGames([...games, updatedGame]);
    }
    return (
      <div className="page">
        {/*Masthead*/}
        <Masthead />
        <div className="collection">
          {/* game collection map goes here*/}
          {/* use ItemCard component in loop */}
          {games.map((favoriteGames) => {
            return (
              <ItemCard
                key={favoriteGames.id}
                deleteFn={deleteCard}
                duplicateFn={duplicateCard}
                {...favoriteGames}
              />
            );
          })}
        </div>
        <hr />
        <NewGamesForm />
      </div>
    );
  }

