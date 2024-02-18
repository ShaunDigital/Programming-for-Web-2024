const DOWN = "DOWN";
const UP = "UP";
let startingX = 50;
let startingY = 40;
let cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatches: 0,
  attempts: 0,
  waiting: false,
  started: false
};
let cardFaceArray = [];
let cardBack;

function preload() {
  cardBack = loadImage("images/CardBack-01.png");
  cardFaceArray = [
    loadImage("images/Apple Front-01.png"),
    loadImage("images/Banana Front-01.png"),
    loadImage("images/Cherry Front-01.png"),
    loadImage("images/Kiwi Front-01.png"),
    loadImage("images/Strawberry Front-01.png"),
    loadImage("images/Watermelon Front-01.png"),
  ];
  document.getElementById("playButton").addEventListener("click", startGame);
  document
    .getElementById("restartButton")
    .addEventListener("click", restartGame);
}
function setup() {
  createCanvas(1000, 625);
  let selectedFaces = [];
  for (let z = 0; z < 6; z++) {
    const randomIdx = floor(random(cardFaceArray.length));
    const face = cardFaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    cardFaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 150;
    }
    startingX = 50;
    startingY += 200;
  }
}

function draw() {
  background("blue");
  if (!gameState.started) {
    return;
  }
  
  for (let k = 0; k < cards.length; k++) {
    if (!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  updateScoreDisplay();
}
// making the game start with no cards showing until you press play
function mousePressed() {
    if (!gameState.started) {
        gameState.started = true;
    }
  if (gameState.waiting) {
    return;
  }

  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log("flipped", cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (
      gameState.flippedCards[0].cardFaceImage ===
      gameState.flippedCards[1].cardFaceImage
    ) {
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      gameState.flippedCards.length = 0;
      gameState.numMatches++;
      loop();
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1100);
    }
  }
}

class Card {
  constructor(x, y, cardFaceImage) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.face = DOWN;
    this.cardFaceImage = cardFaceImage;
    this.isMatch = false;
    this.show();
  }
  show() {
    if (this.face === UP || this.isMatch) {
      rect(this.x, this.y, this.width, this.height, 15);
      image(this.cardFaceImage, this.x, this.y);
    } else {
      rect(this.x, this.y, this.width, this.height, 15);
      image(cardBack, this.x, this.y, this.width, this.height);
    }
  }
  didHit(mouseX, mouseY) {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }
  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

function shuffleArray(array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
// trying to get the score and attempts to  in my div.
function updateScoreDisplay() {
    const matchesParagraph = document.getElementById("matches");
    const attemptsParagraph = document.getElementById("attempts");
    const winParagraph = document.getElementById("win");
  
    matchesParagraph.innerText = "Matches: " + gameState.numMatches;
    attemptsParagraph.innerText = "Attempts: " + gameState.attempts;
  
    if (gameState.numMatches === gameState.totalPairs) {
      winParagraph.innerText = "You Win!";
    } else {
      winParagraph.innerText = ""; // Clear the message if not all matches are found
    }
  }
// i want my buttons to restart the game and to start the game.
function startGame() {
  gameState.numMatches = 0;
  gameState.attempts = 0;
  for (let card of cards) {
    card.face = DOWN;
    card.isMatch = false;
  }
  gameState.waiting = false;
  updateScoreDisplay();
}

function restartGame() {
    gameState.numMatches = 0;
    gameState.attempts = 0;
    for (let card of cards) {
        card.face = DOWN;
        card.isMatch = false;
    }
    gameState.waiting = false;
    loop(); // Add this line to restart the loop
    updateScoreDisplay();
}
