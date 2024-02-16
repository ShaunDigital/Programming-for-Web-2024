let bubbles =[]; 
let moreBubbles = 50;
function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < moreBubbles; i++) {
    bubbles.push(new Bubble());
  } 
}

function draw() {
  background(0);
  for ( let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = random(width);
    this.size = random(10,20);
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(200);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, this.size * 2, this.size * 2);
  }
}
