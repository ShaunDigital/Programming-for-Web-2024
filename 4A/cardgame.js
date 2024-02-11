let startingX = 120;
let startingY = 50;
let rectWidth = 100;
let rectHeight = 150;
let myRect = [];
function setup () {
    createCanvas (1000, 625);
    background("blue");
 for (let i = 0; i < 4; i++) {
    rect(startingX, startingY, rectWidth, rectHeight );
    myRect.push({ x: startingX, y: startingY, id: i});
    startingX += 200;
 }   
  console.log(myRect);
}

function mousePressed() {
    for(let j = 0; j < myRect.length; j++) {
        let centerX = myRect[j].x + rectWidth / 2;
        let centerY = myRect[j].y + rectHeight /2;
        let distance = dist(mouseX, mouseY, centerX, centerY);
            if (distance < rectWidth / 2) {
                console.log("Card " + myRect[j].id + " has been clicked");
            }
    }
}