function Ellipse(x,y) {
	// Konstruktor
	this.x = x;
	this.y = y;
	this.w = 5;
	this.h = 5;
	this.colour = color(250,250,255);
	//
	this.velocity = random(1,5);
	this.acceleration = 0.05;
	// Metode
	this.draw = function(){
		fill(this.colour);
		noStroke();
		ellipse(this.x,this.y,this.w,this.h);
	}

	this.fall = function(){
		this.y += this.velocity;
		this.velocity += this.acceleration;
		if(this.y > height){
			this.y = random(-5,0);
			this.x = random(0, width);
			this.velocity = random(1,5);
		}
	}
}