import { useState } from "react";
import "./NewGamesForm.css";

export function NewGamesForm() {
  const initialGameSetting = {
    gameTitle: "",
    publisher: "",
    gameType: "",
    completed: "",
    platform: ["ps1", "ps2", "ps3", "ps4", "ps5", "Xbox 360", "Xbox One"],
    image: "",
    gameDescription: "",
  };
  const [newGame, setNewGame] = useState(initialGameSetting);
  const [errorObj, setErrorObj] = useState({
    gameTitle: "",
    image: "",
    platform: "",
  });

  function validateForm(newGame) {
    let valid = true;
    if (!newGame.gameTitle) {
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          gameTitle: "The Game Title is required",
        };
      });
      valid = false;
    }
    if (!newGame.image) {
      setErrorObj((prevErrorObj) => {
        return {
          ...prevErrorObj,
          image: "The Game Image is required",
        };
      });
      valid = false;
    }
    if (newGame.platform.length === 0) {
      setErrorObj((prevErrorObj) => ({
        ...prevErrorObj,
        platform: "You must choose at least one platform",
      }));
      valid = false;
    } else {
      setErrorObj((prevErrorObj) => ({
        ...prevErrorObj,
        platform: "",
      }));
    }
    return valid;

    function changeHandler(e) {
      if (e.target.name === "platform") {
        const newPlatform = e.target.id;
        if (newGame.platform.includes(newPlatform)) {
          const filteredArray = newGame.platform.filter((platform) => {
            return platform !== newPlatform;
          });
          setNewGame((prevGame) => {
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
      if (validateForm(newGame)) {
        setNewGame(initialGameSetting);
      }
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
              onBlur={() => {
                if (newGame.image) {
                  setErrorObj((prevErrorObj) => ({
                    ...prevErrorObj,
                    image: "",
                  }));
                }
              }}
            />
            {errorObj.image && (
              <>
                <br />
                <small>{errorObj.image}</small>
              </>
            )}
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
              onBlur={() => {
                if (newGame.image) {
                  setErrorObj((prevErrorObj) => ({
                    ...prevErrorObj,
                    image: "",
                  }));
                }
              }}
            />
            {errorObj.image && (
              <>
                <br />
                <small>{errorObj.image}</small>
              </>
            )}
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
            {errorObj.platform && (
              <>
                <small>{errorObj.platform}</small>
              </>
            )}
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">PS1</label>
              <input
                type="checkbox"
                name="platform"
                id="ps1"
                onChange={changeHandler}
                checked={newGame.platform.includes("ps1")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
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
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
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
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">PS4</label>
              <input
                type="checkbox"
                name="platform"
                id="ps4"
                onChange={changeHandler}
                checked={newGame.platform.includes("ps4")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">PS5</label>
              <input
                type="checkbox"
                name="platform"
                id="ps5"
                onChange={changeHandler}
                checked={newGame.platform.includes("ps5")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">XBOX 360</label>
              <input
                type="checkbox"
                name="platform"
                id="xbox 360"
                onChange={changeHandler}
                checked={newGame.platform.includes("xbox 360")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">XBOX One</label>
              <input
                type="checkbox"
                name="platform"
                id="Xbox One"
                onChange={changeHandler}
                checked={newGame.platform.includes("Xbox One")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
            <div className="form-group-checkbox-group">
              <label htmlFor="platform">PC</label>
              <input
                type="checkbox"
                name="platform"
                id="pc"
                onChange={changeHandler}
                checked={newGame.platform.includes("pc")}
                onBlur={() => {
                  if (newGame.platform.length > 0) {
                    setErrorObj({ ...errorObj, platform: "" });
                  }
                }}
              />
            </div>
          </fieldset>
        </fieldset>
        <fieldset>
          <legend>YOUR Favorite Game</legend>
          <div className="form-group">
            <label htmlFor="gameDescription">
              Why is this your favorite game?
            </label>
            <textarea
              name="gameDescription"
              id="gameDescription"
              value={newGame.gameDescription}
              onChange={changeHandler}
            ></textarea>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewGamesForm;
