function setup() {
  createCanvas(400,269);
  background(200);

  fill(255);
  stroke(0, 255, 0, 50);
  strokeWeight(10);
  ellipse(200, 50, 20);

  fill(0, 100, 0);
  rect(20, 20, 20, 100);

  fill(0, 0, 255);
  noStroke();
  rect(45, 20, 20, 100);

  fill(255);
  rect(80, 20, 20, 100);

  fill(0);
  beginShape();
  vertex(200, 100);
  vertex(100, 150);
  vertex(300, 150);
  endShape();
}
