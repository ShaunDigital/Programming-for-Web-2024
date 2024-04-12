let mySound1;
let mySound2;
let mySound3;
function preload() {
  mySound1 = loadSound("./assets/sample_1_p5.mp3");
  mySound2 = loadSound("./assets/sample_2_p5.mp3");
  mySound3 = loadSound("./assets/sample_3_p5.mp3");
}

function setup() {
  createCanvas(1300, 600);
  background(200);
  text("tap here to play", 10, 20);
  drawRectangle(50, 50, 50, 50, "Rect1");
  drawRectangle(150, 50, 50, 50, "Rect2");
  drawRectangle(250, 50, 50, 50, "Rect3");
}
function drawRectangle(x, y, w, h, label) {
  rect(x, y, w, h);
  text(label, x + 10, y + 20);
}

function mousePressed() {
  // Check if the mouse is inside the rectangle
  if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100) {
    mySound1.play();
  } else if (mouseX > 150 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
    mySound2.play();
  } else if (mouseX > 250 && mouseX < 300 && mouseY > 50 && mouseY < 100) {
    mySound3.play();
  }
}
