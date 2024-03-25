import { useState } from "react";
import "./NewGamesForm.css";

export function NewGamesForm() {
  const initialGameSetting = {
    gameTitle: "",
    publisher: "",
    gameType: "",
    completed: "",
    platform: [],
    image: "",
  };
  const [newGame, setNewGame] = useState(initialGameSetting);

  function changeHandler(e) {
    if (e.target.name === "platform") {
      const newPlatform = e.target.id;
      if (newGame.platform.includes(newPlatform)) {
        const filteredArray = newGame.platform.filter((platform) => {
          return platform !== newPLatform;
        });
        setNewPLatform((prevGame) => {
          return {
            ...prevGame,
            platform: filteredArray,
          };
        });
      } else {
        const addedPlatform = [...newGame.platform, newPlatform];
        setNewGame((prevGame) => {
          return { ...prevGame, platform: addedPlatform };
        });
      }
    } else {
      setNewGame((prevGame) => ({
        ...prevGame,
        [e.target.name]: e.target.value,
      }));
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log({ newGame });
  }

  return (
    <form className="new-games-form-wrapper" onSubmit={submitHandler}>
      <fieldset>
        <legend>Game Details</legend>
        <div className="form-group">
          <label htmlFor="gameTitle">Game Title</label>
          <input
            type="text"
            name="gameTitle"
            id="gameTitle"
            value={newGame.gameTitle}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gameType">Game Type</label>
          <input
            type="text"
            name="gameType"
            id="gameType"
            onChange={changeHandler}
            value={newGame.gameType}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Game Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            value={newGame.image}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="completed">Game Completed?</label>
          <input
            type="text"
            name="completed"
            id="completed"
            value={newGame.completed}
            onChange={changeHandler}
          />
        </div>
        <fieldset>
          <legend>Game Platform</legend>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">PS1</label>
            <input
              type="checkbox"
              name="platform"
              id="ps1"
              onChange={changeHandler}
              checked={newGame.platform.includes("ps1")}
            />
          </div>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">PS2</label>
            <input
              type="checkbox"
              name="platform"
              id="ps2"
              onChange={changeHandler}
              checked={newGame.platform.includes("ps2")}
            />
          </div>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">PS3</label>
            <input
              type="checkbox"
              name="platform"
              id="ps3"
              onChange={changeHandler}
              checked={newGame.platform.includes("ps3")}
            />
          </div>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">XBOX 360</label>
            <input
              type="checkbox"
              name="platform"
              id="xbox-360"
              onChange={changeHandler}
              checked={newGame.platform.includes("xbox", "360")}
            />
          </div>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">XBOX One</label>
            <input
              type="checkbox"
              name="platform"
              id="xbox-one"
              onChange={changeHandler}
              checked={newGame.platform.includes("Xbox", "One")}
            />
          </div>
          <div className="form-group-checkbox-group">
            <label htmlFor="platform">PC</label>
            <input
              type="checkbox"
              name="platform"
              id="pc"
              onChange={changeHandler}
              checked={newGame.platform.includes("PC")}
            />
          </div>
        </fieldset>
      </fieldset>
      <fieldset>
        <legend>Game Collection Details</legend>
      </fieldset>
      <button type="submit">Add Game</button>
    </form>
  );
}
