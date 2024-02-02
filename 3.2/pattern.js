function setup() {
    createCanvas(600, 600);
  }
  
  function createTile(originX, originY, primaryColor) {
    translate(originX, originY);
    fill("primaryColor");
    rect(0, 0, 200, 200);
    stroke("#e18e1e");
    strokeWeight(5);
    line(200, 200, 50, 0);
    line(200, 200, 100, 0);
    line(200, 200, 150, 0);
    line(200, 200, -10, 0);
    line(200, 200, -75, 0);
    line(200, 200, -175, 0);
    line(200, 200, -375, 0);
    line(200, 200, -775, 0);
   
    
    
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
  createTile(0, 0, "red");
  createTile(0, 200, "yellow");
  createTile(0, 200, "purple");
  createTile(200, -400, "teal");
  createTile(200, -0, "aqua");
  createTile(-200, 200, "orange");
  createTile(0, 200, "cyan");
  createTile(200, 0, "pink");
  createTile(0, -200, "rose");
  }
    
  