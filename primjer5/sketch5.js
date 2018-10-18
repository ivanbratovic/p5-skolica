var snowflakes = [];
var NUM = 200;
function setup() {
	createCanvas(800,500);
	background(50);
	for(var i = 0; i < NUM; i++){
		snowflakes[i] = new Ellipse(random(width),random(-NUM*6,0));		
	}
	console.log(snowflakes);
}

function draw() {
	background(10,10,50);
	for(var i = snowflakes.length-1; i >= 0; i--){
		snowflakes[i].draw();
		snowflakes[i].fall();
		if (snowflakes[i].y >= height-5){
			snowflakes.splice(i,1);
		}			
	}
}