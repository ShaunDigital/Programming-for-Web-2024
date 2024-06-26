import "./App.css";
import { GameRow } from "./gameRow";
function App() {
  const favoriteGames = [
    {
      gameTitle: "Final Fantasy VIII",
      publisher: ["Square Enix"],
      gameType: "Classic RPG",
      completed: true,
      platform: "PS1",
      image: "./Final_Fantasy_8_ntsc-front.png"
    },
    {
      gameTitle: "Fallout 3",
      publisher: ["Bethesda Softworks"],
      gameType: "Modern RPG",
      completed: true,
      platform: "PS3",
      image: "./Fallout_3_cover_art.PNG"
    },    
    {
      gameTitle: "Fallout New Vegas",
      publisher: ["Obsidian", "Bethesda"],
      gameType: "Modern RPG",
      completed: true,
      platform: "PS3",
      image: "./Fallout_New_Vegas.png"
    },
    {
      gameTitle: "Destiny 2",
      publisher: ["Bungie"],
      gameType: "MMORPG",
      completed: true,
      platform: "PC",
      image: "./Destiny_2_(artwork).png"
    },
    {
      gameTitle: "Remnant- From the Ashes",
      publisher: ["Gunfire Games", "Perfect World Entertainment"],
      gameType: "Survival Action RPG",
      completed: true,
      platform: "PC",
      image: "./Remnant_From_the_Ashes_cover_art.png"
    },
    {
      gameTitle: "The Witcher 3: Wild Hunt",
      publisher: ["CD Projekt"],
      gameType: "Action RPG",
      completed: true,
      platform: "PC",
      image: "./Witcher_3_cover_art.png"
    },
  ]
  return (
    <>
    <h1>My Favorite Video Games</h1>
        <table className="game-table">
      <thead>
        <tr>
          <th>Game Title</th>
          <th>Publisher</th>
          <th>Game Type</th>
          <th>Completed the Game?</th>
          <th>Platform I Play this Game On</th>
          <th>Image</th>
          </tr>
      </thead>
      <tbody>
          {favoriteGames.map((game, index) => {
            return (
               <GameRow 
               key={game.image}              
               gameTitle={game.gameTitle}
               publisher={game.publisher}
               gameType={game.gameType}
               completed={game.completed}
               platform={game.platform} 
               image={game.image}              
               />
            )
          })}
          </tbody>
    </table>
    </>
  )
}

export default App;
