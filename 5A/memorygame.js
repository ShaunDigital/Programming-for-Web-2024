const DOWN = "DOWN";
const UP = "UP";
let startingX = 50;
let startingY = 40;
let cards = [];
const gameState = {

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
        loadImage("images/Watermelon Front-01.png")
    ]
    
}
function setup() {
  createCanvas(1000, 625);
  background("blue");
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      cards.push(new Card(startingX, startingY, cardFaceArray[0]));
      startingX += 150;
    }
    startingX = 50; 
    startingY += 200;
  }
}
function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log(flipped, cards[k]);
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
    this.show();
  }
  show() {
    if (this.face === DOWN) {
      rect(this.x, this.y, this.width, this.height, 15);
      stroke("#1f1d52");
      strokeWeight(2);
      image(cardBack, this.x, this.y, this.width, this.height);
    } else {
      rect(this.x, this.y, this.width, this.height, 15);
      image(this.cardFaceImage, this.x, this.y);
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
