import React, { useState } from "react";
import AnimalNameComponent from "./AnimalNameComponent";
import "./App.css";

function App() {
  const [headline, setHeadline] = useState("Short List of Animals");
  const [animalNames, setAnimalNames] = useState([
"Canidae",
"Felidae",
"Cat",
"Cattle",
"Dog",
"Donkey",
"Goat",
"Guinea pig",
"Horse",
"Pig",
"Rabbit",
"Fancy rat varieties",
"laboratory rat strains",
"Sheep breeds",
"Water buffalo breeds",
"Chicken breeds",
"Duck breeds",
"Goose breeds",
"Pigeon breeds",
"Turkey breeds",
"Aardvark",
"Aardwolf",
"African buffalo",
"African elephant",
"African leopard",
"Albatross",
"Alligator",
"Alpaca",
  ]);
  function deleteState(animalName) {
    const updatedArray = animalNames.filter((animal) => {
      return animalName !== animal;
    });
    setAnimalNames(updatedArray);
  }
  function focusState(animalName) {
    setHeadline(animalName);
  }

  return (
    <>
      <h1>{headline}</h1>
      {animalNames.map((animalName) => {
        return (
          <AnimalNameComponent
            key={animalName}
            stateName={animalName}
            deleteFn={deleteState}
            focusFn={focusState}
          />
        );
      })}
    </>
  );
}

export default App;
