function setup() {
  createCanvas(1350, 620);
}

function draw() {
  background(0);
  frameRate(3);
  
  
  for (let i = 0; i < 250; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 20);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    ellipse(x, y, size, size);
  }

    
}
function mousePressed() {
  if (isLooping) {
    noLoop();
  } else {
    loop();
  }
  isLooping = !isLooping;
}
