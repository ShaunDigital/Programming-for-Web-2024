function setup() {
  createCanvas(200, 200);
}

function createTile() {
  translate(0, 0);
  fill("#9a53d5");
  rect(0, 0, 200, 200);
  stroke("#e18e1e");
  strokeWeight(5);
  line(200, 200, 50, 0);
  line(200, 200, 100, 0);
  line(200, 200, 150, 0);
  line(200, 200, 225, 0);
  line(200, 200, -10, 0);
  line(200, 200, -75, 0);
  line(200, 200, -175, 0);
  line(200, 200, -375, 0);
  line(200, 200, -775, 0);
 
  
  
  line(50, 0, 0, 200);
  line(100, 0, 0, 200);
  line(150, 0, 0, 200);
  line(225, 0, 0, 200);
  line(325, 0, 0, 200);
  line(475, 0, 0, 200);
  line(800, 0, 0, 200);
  line(800, 0, 0, 200);
  line(1500, 0, 0, 200);
  noStroke();
  fill("#cfd553");
  circle(55, 100, 25);
  circle(100, 55, 25);
  circle(100, 100, 40);
  circle(100, 145, 25);
  circle(145, 100, 25);
  noFill();
  stroke("#1ed2e1");
  strokeWeight(6);
  circle(100, 100, 55);
  circle(55, 100, 65);
  circle(145, 100, 65);
  circle(100, 55, 65);
  circle(100, 145, 65);


} 

function draw() {
createTile();
}
  
