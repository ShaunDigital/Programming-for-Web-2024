let angleX1 = 0;
let angleY1 = 0;
let angleX2 = 0;
let angleY2 = 0;
let radius1 = 350; // Radius of the first looping motion
let radius2 = 250; // Radius of the second looping motion
let centerX, centerY; // Center coordinates of the canvas

function setup() {
  createCanvas(1300, 600);
  centerX = width / 2; // Calculate center x-coordinate of canvas
  centerY = height / 2; // Calculate center y-coordinate of canvas
  background(0, 10); // Set a slightly transparent background
}

function draw() {
  // Draw a semi-transparent rectangle over the canvas to create a trail effect
  fill(0, 10); // Same color as background with opacity
  rect(0, 0, width, height);

  // Calculate positions for first ellipse based on looping motion
  let x1 = centerX + cos(angleX1) * radius1;
  let y1 = centerY + sin(angleY1) * radius1;

  // Calculate positions for second ellipse based on looping motion
  let x2 = centerX + cos(angleX2) * radius2;
  let y2 = centerY + sin(angleY2) * radius2;

  // Update angles for next frame
  angleX1 += 0.06; // Adjust the speed of motion by changing the increment value
  angleY1 += 0.05; // Adjust the speed of motion by changing the increment value
  angleX2 -= 0.03; // Adjust the speed and direction of motion for the second ellipse
  angleY2 -= 0.05; // Adjust the speed and direction of motion for the second ellipse

  // Generate random RGB values for fill color
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Draw first ellipse at updated position with dynamic size and random color
  fill(r, g, b);
  ellipse(x1, y1, 50, 50); // Using fixed size for the ellipse, adjust as needed

  // Draw second ellipse at updated position with dynamic size and random color
  fill(b, r, g); // Different color for the second ellipse
  ellipse(x2, y2, 60, 60); // Using fixed size for the ellipse, adjust as needed
}
