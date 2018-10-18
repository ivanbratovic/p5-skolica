function setup() {
  createCanvas(300,300);
  background(100);
}

function draw() {
  // put drawing code here

	strokeWeight(10);
	
	stroke(random(255));
	
	fill(255,150,60);
	ellipse(width/2, height/2, 100, 100);

}