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
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 145, 90);
  //body middle
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 265, 150);
  //body bottom
  strokeWeight(1);
  stroke(20, 10, 100);
  ellipse(500, 445, 210);
}
