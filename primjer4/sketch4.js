var ell;
function setup() {
	createCanvas(800,500);
	background(50);
	ell = new Ellipse(width/2, height/2)
}

function draw() {
	background(50);
	ell.draw();
	ell.rotate();
}

function mousePressed() {
	ell.resetRotation();
}