let startingX = 50;
let startingY = 25;
let rectWidth = 100; // modified this size for a rectangle card
let rectHeight = 150; // rectangle card
let myRect = [];
function setup () {
    createCanvas (1000, 625); //larger canvas
    background("blue");  // color for the background
    // for loop that creates the cards - i added 3 rows with k < 3 amd i < 4
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, rectWidth, rectHeight);
            myRect.push({ x: startingX, y: startingY, id: i + k * 4}); // i found a solution for the ids on stack overflow.
            startingX += 200;
         }
         startingX = 50; // this threw me a for awhile -  i kept adding += and that did not work
         startingY += 200;
         
    }
    
  console.log(myRect);
}
// i researched a lot to find out why i was getting clicks outside of the rectangle with Width and Height and not inside them. I found centerX and Y and that worked. I also added the id to the middle of the condole log so it would read more like a sentence.
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