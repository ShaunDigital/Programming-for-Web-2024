/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function setup() {
  createCanvas(1000, 600).position(170, 20);
  background("#99ccff");
}

function draw() {
  fill("#f1f1f1");
  //background
  noStroke();
  fill(204, 229, 255);
  rect(0, 325, 1000, 600);
  //head
  fill("#f1f1f1");
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 142, 95);
  //body middle
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 265, 150);
  //body bottom
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 445, 210);
  //hat body
  fill("#003377");
  strokeWeight(1);
  quad(440, 120, 480, 45, 510, 65, 550, 95);
  // hat brim
  fill("#003366");
  strokeWeight(15);
  line(550, 95, 440, 120);
}
