function setup() {
  createCanvas(1360, 600);
  background(0);
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  noStroke();

  // Calculate distance between cursor and fixed point (center of canvas)
  let d = dist(mouseX, mouseY, width / 2, height / 2);

  // Map the distance to ellipse size 
  let size = map(d, 0, dist(0, 0, width / 2, height / 2), 100, 1);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(r, g, b);
  }

 
  ellipse(mouseX, mouseY, size, size);
}
