function setup() {
  createCanvas(1360, 600);
  background(0);
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  noStroke()
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(r,g,b);
  }
  ellipse(mouseX, mouseY, 50, 50);
}
