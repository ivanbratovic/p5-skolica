function Ellipse(x,y) {
	// Konstruktor

	this.x = x;
	this.y = y;
	this.w = 450;
	this.h = 275;
	this.colour = color(50,165,255);

	//
	this.angle = 0;
	this.velocity = 0.5;
	this.acceleration = -0.01;
	// Metode

	this.draw = function(){
		fill(this.colour);
		push();
		translate(this.x,this.y)
		rotate(this.angle);
		ellipse(0,0,this.w,this.h);
		pop();
		fill(255,50,50);
		rect(0,0,30,map(this.velocity,0,10,0,height))
	}

	this.rotate = function(){
		this.angle += this.velocity;
		this.velocity += this.acceleration;
		if(this.velocity <= 0){
			this.velocity = 0;
		}
	}

	this.resetRotation = function(){
		this.velocity += 0.2;
	}
}