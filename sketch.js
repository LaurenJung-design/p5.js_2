function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 30, 50);

  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);

  fill(r, g, 200);
  noStroke();

  ellipse(mouseX, mouseY, 80, 80);
}
