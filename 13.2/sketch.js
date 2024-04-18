let pos;
let pos2;
let inc;
let inc2;

function setup() {
  createCanvas(1500, 650);
  angleMode(DEGREES);
  frameRate(20)

  pos = 0.0;
  inc = 4.0;

  pos2 = 0.0;
  inc2 = 5.0;
}

function draw() {
  background(0);

  let mySinVal = sin(pos);
  let mySinVal2 = sin(pos2);
  let amplified = mySinVal * 10;
  let amplified2 = mySinVal2 * 250;

  for (let x = 0; x <= 360; x += 6) {
    push(); // Save the current transformation matrix
    translate(width / 2, height / 2); // Translate to the center of the canvas
    rotate(x); // Rotate by x degrees

strokeWeight(2);
    stroke(0, 255, 222);
    fill(255, 0, 255, 70);
    curve(1000, -amplified2 * 10, 300, -amplified2 * 10, amplified, 350, amplified, 100); // Draw the rotated curve
    pop(); // Restore the original transformation matrix
  }
 

  pos += inc;
  pos2 += inc2;
}
