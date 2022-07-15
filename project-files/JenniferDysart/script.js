// option for Lishan & Marton, edit so that the mouse has a tail in background but disappears over focus area

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);


  fill(0);
  text("(i do not want to tell this story)", mouseX -60, mouseY);

  // need to figure out how to add borderbox:

  //   stroke(0);
  // fill(255);
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 200, 20, 8);
}
