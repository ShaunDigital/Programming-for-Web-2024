let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup() {
    createCanvas(500, 500); 
    rectY = random(height - rectHeight);   
    speed = random(1, 3);
;  }

  function draw () {
    background("#9a53d5");
    drawShape();
    rectX++;
    if(rectX > width) {
      noLoop();
      text("Your Score Was " + clickCount, 100, 300);
    }
  }

  function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log("hit", clickCount);        
    }
    
  }

  function drawShape() {
    fill("purple");
    rect(rectX, rectY, rectWidth, rectHeight);
  }