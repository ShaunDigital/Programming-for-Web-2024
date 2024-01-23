/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let stroke1 = prompt("What color would you like?", "blue");
let stroke2 = prompt("What color would you like?", "purple");
let fill1 = prompt("What color would you like?", "red");
let fill2 = prompt("What color would you like?", "turquoise");
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
  //mountains  
  fill("#d0d0e1");
  triangle(320, 330, 520, 50, 760, 330);
  fill("#e0e0eb");
  triangle(520, 330, 720, 50, 960, 330);
  fill("#e0e0eb");
  triangle(20, 330, 220, 50,  560, 330);
  //head
  strokeWeight(1);
  stroke(stroke1);
  ellipse(500, 142, 95);
  //body middle
  strokeWeight(1);
  stroke(stroke2);
  ellipse(500, 265, 150);
  //arms
  strokeWeight(3);
  stroke(stroke1);
  line(450, 250, 320, 170);
  line(550, 250, 700, 185);
  //body bottom
  strokeWeight(1);
  stroke(stroke1);
  ellipse(500, 445, 210);
  //buttons
  strokeWeight(15);
  point(500, 230);
  point(500, 260);
  point(500, 290);
  //hat body
  fill(fill1);
  strokeWeight(1);
  quad(450, 120, 450, 70, 510, 55, 530, 90);
  // hat brim
  fill(fill2);
  strokeWeight(15);
  line(550, 95, 440, 120);
  //eyes
  stroke(0);
  strokeWeight(20);
  point(475, 135);
  point(525, 135);
  // mouth
  noFill();
  strokeWeight(5);
  arc(495, 160, 50, 30, 0, HALF_PI);
  //tree trunk
  stroke(153, 102, 51);
  strokeWeight(10);
  line(120, 400, 120, 100);
  //branches
  noStroke()
  fill(0, 153, 0);
  triangle(50, 375, 120, 80, 200, 375);
  //tree trunk
  stroke(153, 102, 51);
  strokeWeight(10);
  line(920, 400, 920, 100);
  //branches
  noStroke()
  fill(0, 153, 0);
  triangle(850, 375, 920, 80, 1000, 375);


}
