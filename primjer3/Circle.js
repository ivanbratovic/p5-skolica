function Circle(x,y) {
	// Konstruktor

	this.x = x;
	this.y = y;
	this.d = 100;
	this.colour = color(30,255,160);

	//
	this.falling = true;

	this.angle = 0;
	this.velocity = 0.1;
	this.acceleration = 0.01;
	// Metode

	this.draw = function(){
		fill(this.colour);
		push();
		translate(this.x,this.y);
		rotate(this.angle);
		this.angle += 0.01;
		ellipse(0,0,this.d/2,this.d);
		pop();
	}

	this.fall = function(){
		if(!this.falling){
			
			this.y = height - this.d/2;
			return;
		}
		if(this.y + this.d/2 >= height){
			this.falling = false;

		}
		}
		


}