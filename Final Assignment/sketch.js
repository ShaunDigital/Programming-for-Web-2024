let freqs = [
  [261.63, 277.18, 293.66, 311.13],
  [329.63, 349.23, 369.99, 392.0],
  [415.3, 440.0, 466.16, 493.88],
];
let keys = [81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86];
let pads = [];
let waveformWindow;
let fft;
let waveformType = "sine";   // default sound

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  fft = new p5.FFT();

  for (let i = 0; i < freqs.length; i++) {
    for (let j = 0; j < freqs[i].length; j++) {
      pads.push(
        new Pad(
          900 + 160 * j,
          100 + 160 * i,
          freqs[i][j],
          keys[i + j * freqs[i].length]
        )
      );
    }
  }

  // Create waveform window for frequency spectrum visualization

  waveformWindow = createGraphics(500, 300);
  waveformWindow.background(0);
}

function draw() {
  background(0);
  

  for (let i = 0; i < pads.length; i++) {
    pads[i].draw();
  }

  // Draw waveform window

  image(waveformWindow, 100, 50);
}

function keyPressed() {
  for (let i = 0; i < keys.length; i++) {
    if (keyCode === keys[i]) {
      pads[i].play();
    }
  }
}

function changeWaveform() {
  let select = document.getElementById('waveformSelect');
  waveformType = select.value;

  for (let i = 0; i < pads.length; i++) {
    pads[i].updateWaveformType(waveformType);

  }
}

class Pad {
  constructor(x, y, freq) {
    this.x = x;
    this.y = y;
    this.freq = freq;
    this.padSize = 150;
    this.borderOffset = -5;

    this.osc = new p5.Oscillator();
    this.osc.amp(0);
    this.osc.setType("sine");
    this.osc.start();

    this.envelope = new p5.Envelope();
    this.envelope.setADSR(0.001, 0.1, 0.2, 0.1);
    this.envelope.setRange(3, 0);

    this.analyzer = new p5.Amplitude();
    this.analyzer.setInput(this.osc);

    // FFT setup to get sound from the Oscillator input
    this.fft = fft;
    this.fft.setInput(this.osc);
  }

  draw() {
    let level = this.analyzer.getLevel();
    let levelHeight = map(level, 0, 2.5, 0, 150);
    fill("orange");
    noStroke();
    rect(this.x, this.y, 150, 150);

    // Draw border with offset around each pad
    strokeWeight(2);
    stroke("white");
    noFill();
    rect(
      this.x + this.borderOffset,
      this.y + this.borderOffset,
      this.padSize - 2 * this.borderOffset,
      this.padSize - 2 * this.borderOffset
    );

    // Draw pad visualizer over top of the existing pad
    fill("yellow");
    noStroke();
    rect(
      this.x,
      this.y + this.padSize - levelHeight,
      this.padSize,
      levelHeight
    );

    // Update waveform window so it renders in real time
    this.updateWaveform();
  }

  play() {
    this.osc.start();
    this.osc.freq(this.freq);
    this.envelope.play(this.osc);
  }

  updateWaveformType(type) {
    this.osc.setType(type);
  }


  // visualization

  updateWaveform() {
    let waveform = this.fft.waveform();
    waveformWindow.clear(); // Clear previous content
    waveformWindow.background(0);
    waveformWindow.stroke(200, 200, 20);
    waveformWindow.strokeWeight(4);
    waveformWindow.beginShape();
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, waveformWindow.width);
      let y = map(waveform[i], -1, 1, waveformWindow.height, 0);
      waveformWindow.vertex(x, y);
    }
    waveformWindow.endShape();
    
    // Draw color-coded frequency spectrum in the waveform window
    this.drawFrequencySpectrum();
  }

  drawFrequencySpectrum() {
    let spectrum = this.fft.analyze();
    let spectrumWidth = waveformWindow.width / spectrum.length;

    for (let i = 0; i < spectrum.length; i++) {
      let x = i * spectrumWidth;
      let h = -waveformWindow.height + map(spectrum[i], 0, 255, waveformWindow.height, 0);
      let c = color(map(i, 0, spectrum.length, 0, 255), 25, 255); // Color gradient

      // Draw colored bars for each frequency band in the waveform window
      waveformWindow.fill(c);
      waveformWindow.rect(x, waveformWindow.height, spectrumWidth, h);
    }
  }
}