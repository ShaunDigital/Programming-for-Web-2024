function setup() {
    createCanvas(600, 600);
  }
  
  function createTile(originX, originY, primaryColor, secondaryColor, circleColor, otherCircleColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(200, 200, 50, 0);
    line(200, 200, 100, 0);
    line(200, 200, 0, 40);
    line(200, 200, 0, 80);
    line(200, 200, 0, 120);
    line(200, 200, 0, 150);
    line(200, 200, 0, 170);
    line(200, 200, 0, 0);
    line(200, 200, 150, 0);
   
    
    
    line(50, 0, 0, 200);
    line(100, 0, 0, 200);
    line(150, 0, 0, 200);
    line(200, 50, 0, 200);
    line(200, 80, 0, 200);
    line(200, 120, 0, 200);
    line(200, 0, 0, 200);
    line(200, 150, 0, 200);
    line(200, 170, 0, 200);
    noStroke();
    fill(circleColor);
    circle(55, 100, 25);
    circle(100, 55, 25);
    circle(100, 100, 40);
    circle(100, 145, 25);
    circle(145, 100, 25);
    noFill();
    stroke(otherCircleColor);
    strokeWeight(6);
    circle(100, 100, 55);
    circle(55, 100, 65);
    circle(145, 100, 65);
    circle(100, 55, 65);
    circle(100, 145, 65);
  
  
  } 
  
  function draw() {
  createTile(0, 0, "red", "blue", "yellow", "green");
  createTile(0, 200, "yellow", "orange", "green", "blue");
  createTile(0, 200, "purple", "green", "blue", "turquoise");
  createTile(200, -400, "teal", "blue", "pink", "cyan");
  createTile(200, -0, "blue", "red", "orange", "purple");
  createTile(-200, 200, "orange", "purple", "red", "yellow");
  createTile(0, 200, "cyan", "red", "yellow", "blue");
  createTile(200, 0, "blue", "green", "red", "magenta");
  createTile(0, -200, "red", "yellow", "black", "cyan");
  }
    
  