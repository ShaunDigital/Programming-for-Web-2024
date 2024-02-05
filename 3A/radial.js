let rotateBy = 10;
let rotateBy2 = 5;
let rotateBy3 = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
    frameRate(15); // slowed the speed down to give a better visual effect.

}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke("#1ed2e1");
    strokeWeight(2);
    bezier(25 - alt, 25, 150  * alt, 50 / alt, 25, 50, 150, 55); // different values of the bezier
}

function makeArm2(rotateBy2) {
    let alt = Math.round(rotateBy2 / 360);
    console.log(alt);
    noFill();
    stroke("#cb348b");
    strokeWeight(3);
    bezier(10 - alt, 25, 100  * alt, 100 / alt, 25, 50, 150, 55); // different shape of bezier to compliment the first
}

function makeArm3(rotateBy3) {
    let alt = Math.round(rotateBy3 / 360);
    console.log(alt);
    noFill();
    stroke("#b43ac5");
    strokeWeight(1);
    rect(150 - alt, 50, 150); // added a rectangle for more visual effects.
}
function draw() {
    translate(300, 300);
    rotate(rotateBy) 
    makeArm(rotateBy);
    rotate(rotateBy2) 
    makeArm2(rotateBy);
    rotate(rotateBy3) 
    makeArm3(rotateBy3);
    rotateBy += 10;
    rotateBy2 += 10;
    rotateBy3 += 5;

}
// researched how to make the drawing dependant on the mouse being pressed, wither to stop or start the drawing

function mousePressed() {
    if (isLooping) {
        noLoop();
    } else {
        loop();
    }
    isLooping = !isLooping;
    
}