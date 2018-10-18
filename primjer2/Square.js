function Square(x,y) {
	// Konstruktor

	this.x = x;
	this.y = y;
	this.w = 100;
	this.colour = color(255,165,30);

	// Metode

	this.draw = function(){
		noStroke();
		fill(this.colour);
		rect(this.x,this.y,this.w,this.w);
		ellipse(this.x+this.w/2,this.y+this.w,this.w,this.w)
	}

}