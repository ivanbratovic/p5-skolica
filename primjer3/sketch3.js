
var circle;

function setup() {
	createCanvas(800,400);
	background(150);
	circle = new Circle(width/2, 200);
}

function draw() {
	background(150);
	circle.draw();
}