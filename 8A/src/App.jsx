import { useState } from "react";
import "./App.css";
import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";
import {nanoid} from "nanoid";

function App() {
  const [games, setGames] = useState([
    {
      gameTitle: "Final Fantasy VIII",
      publisher: ["Square Enix"],
      gameType: "Classic RPG",
      completed: true,
      platform: "PS1",
      image: "./Final_Fantasy_8_ntsc-front.png",
      id: "1"
    },
    {
      gameTitle: "Fallout 3",
      publisher: ["Bethesda Softworks"],
      gameType: "Modern RPG",
      completed: true,
      platform: "PS3",
      image: "./Fallout_3_cover_art.PNG",
      id: "2"
    },
    {
      gameTitle: "Fallout New Vegas",
      publisher: ["Obsidian", "Bethesda"],
      gameType: "Modern RPG",
      completed: true,
      platform: "PS3",
      image: "./Fallout_New_Vegas.png",
      id: "3"
    },
    {
      gameTitle: "Destiny 2",
      publisher: ["Bungie"],
      gameType: "MMORPG",
      completed: true,
      platform: "PC",
      image: "./Destiny_2_(artwork).png",
      id: "4"
    },
    {
      gameTitle: "Remnant- From the Ashes",
      publisher: ["Gunfire Games", "Perfect World Entertainment"],
      gameType: "Survival Action RPG",
      completed: true,
      platform: "PC",
      image: "./Remnant_From_the_Ashes_cover_art.png",
      id: "5"
    },
    {
      gameTitle: "The Witcher 3: Wild Hunt",
      publisher: ["CD Projekt"],
      gameType: "Action RPG",
      completed: true,
      platform: "PC",
      image: "./Witcher_3_cover_art.png",
      id: "6"
    },
  ]);

  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = games.filter((favoriteGames) => {
      return favoriteGames.id !== id;
    })
    setGames(updatedArray);
  }

  function duplicateCard(id) {
    console.log("duplicate me", id)
    const matchingGame = games.find((favoriteGames) => {
      return favoriteGames.id === id
    });
    const updatedGame = {...matchingGame, id: nanoid() }
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
          )
        })}
        </div>
    </div>
  );
}

export default App;
