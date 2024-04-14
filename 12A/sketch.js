let freqs = [
  [261.63, 277.18, 293.66, 311.13],
  [329.63, 349.23, 369.99, 392.0],
  [415.3, 440.0, 466.16, 493.88],
];
let keys = [81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86];
let pads = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for (let i = 0; i < freqs.length; i++) {
    for (let j = 0; j < freqs[i].length; j++) {
      pads.push(
        new Pad(
          600 + 160 * j,
          100 + 160 * i,
          freqs[i][j],
          keys[i + j * freqs.length]
        )
      );
    }
  }
}
function draw() {
  for (let i = 0; i < pads.length; i++) {
    pads[i].draw();
  }
 }
function keyPressed() {
  for (let i = 0; i < keys.length; i++) {
    if (keyCode === keys[i]) {
      pads[i].play();
    }
  }
}


class Pad {
  constructor(x, y, freq) {
    // set up properties - actual pad position

    this.x = x;
    this.y = y;
    this.freq = freq;
    this.padSize = 150;
    this.borderOffset = -5;

    // Oscillator, Envelope, Amplitude objects.
    this.osc = new p5.Oscillator();
    this.osc.amp(0);
    this.osc.setType("sawtooth");
    this.osc.start();

    //Envelope
    this.envelope = new p5.Envelope();
    this.envelope.setADSR(0.001, 0.1, 0.2, 0.1);
    this.envelope.setRange(3, 0);

    this.analyzer = new p5.Amplitude();
    this.analyzer.setInput(this.osc);
  }

  draw() {
    let level = this.analyzer.getLevel();
    let levelHeight = map(level, 0, 2.5, 0, 150);
    fill("orange");
    noStroke();
    rect(this.x, this.y, 150, 150);

   // Draw border with offset
   strokeWeight(2);
   stroke("white");
   noFill();
   rect(this.x + this.borderOffset, this.y + this.borderOffset, this.padSize - 2 * this.borderOffset, this.padSize - 2 * this.borderOffset);

   // Draw pad
   fill("yellow");
   noStroke();
   rect(this.x, this.y + this.padSize - levelHeight, this.padSize, levelHeight);
 }

  play() {
    this.osc.start();
    this.osc.freq(this.freq);
    this.envelope.play(this.osc);
  }
}
