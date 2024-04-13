let freqs = [100, 200, 300, 400, 500];
let keys = [65, 83, 68, 70, 71];
let pads = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);

  for (let i = 0; i < freqs.length; i++) {
    pads.push(new Pad(10 + 160 * i, 10, freqs[i]));
  }
}
function draw() {
  for (let i = 0; i < freqs.length; i++) {
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

    // Oscillator, Envelope, Amplitude objects.
    this.osc = new p5.Oscillator();
    this.osc.amp(0);
    this.osc.setType("sine");
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
    rect(this.x, this.y, 150, 150);

    fill("yellow");
    noStroke();
    rect(this.x, this.y, 150, levelHeight);
  }

  play() {
    this.osc.start();
    this.osc.freq(this.freq);
    this.envelope.play(this.osc);
  }
}
