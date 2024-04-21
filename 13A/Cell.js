function Cell(pos, r, c) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = pos || createVector(random(width), random(height));
  }

  this.r = r || 200;
  this.c = c || color(random(50, 255), 0, random(100, 255), 100);

  this.clicked = function (x, y) {
    let d = dist(this.pos.x, this.pos.y, x, y);
    return d < this.r;
  };

  this.mitosis = function() {
    let newColor = color(random(25, 200), 0, random(100, 255), 50); // Generate random color
    let newRadius = this.r * 0.95; // Reduced size for new cell
    let newCell = new Cell(this.pos, newRadius, newColor); // Create new cell with random color and reduced size
  
    // Calculate a vector pointing in a random direction
    let dir = p5.Vector.random2D();
    // Set the magnitude of the vector to represent the desired distance between cells
    let distance = 0.75 * newRadius; // Adjust the multiplication factor as needed
    dir.mult(distance);
  
    // Adjust the velocity of the new cell to spread out faster
    let vel = p5.Vector.random2D();
    vel.mult(80); // Adjust the multiplication factor as needed for faster spreading
  
    // Add the velocity and direction vectors to the position of the new cell
    newCell.pos.add(vel);
    newCell.pos.add(dir);
  
    return newCell;
  };
  

  this.move = function() {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  
    // Boundary checks
    if (this.pos.x < 0) {
      this.pos.x = 0;
    } else if (this.pos.x > width) {
      this.pos.x = width;
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
    } else if (this.pos.y > height) {
      this.pos.y = height;
    }
  };

  this.show = function () {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
