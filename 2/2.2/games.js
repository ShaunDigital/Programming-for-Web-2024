
const Game1 = {
    title: "Final Fantasy 8" ,
    type: "not a multiplayer",
    year: 1998,
    publisher: "square enix",
    
};

const Game2 = {
    title: "Fallout 3" , 
    type: "not a multiplayer",
    year: 2006,
    publisher: "bethesda",
};

const Game3 = {
    title: "Destiny 2" , 
    type: "multiplayer",
    year: 2008,
    publisher: "bungie",
};

const myGamesArray = [Game1 , Game2 , Game3];

console.log(myGamesArray);

const promptResponse = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

window.alert("You selected " + myGamesArray[promptResponse -1 ].title + " which is  " + myGamesArray[promptResponse - 1].type + " game " + "published by " + myGamesArray[promptResponse -1 ].publisher + " in " +  myGamesArray[promptResponse - 1].year)
