var sqr;
function setup() {
	createCanvas(800,600);
	background(150);
	sqr = new Square(450, 50);
}

function draw() {
	sqr.draw();
}